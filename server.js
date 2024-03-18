const WebSocket = require("ws");
const url = require("url");
const fs = require("fs");

// Cria um servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("dados.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, user TEXT, date DATE)"
  );
});

function getAllMessages(callback) {
  const query = "SELECT * FROM messages";
  db.all(query, (err, rows) => {
    if (err) {
      console.error("Erro ao obter mensagens do banco de dados:", err);
      callback(err, null);
      return;
    }
    callback(null, rows);
  });
}

function sendMessagesForClients() {
  getAllMessages((err, messages) => {
    if (err) {
      console.error("Erro ao obter mensagens:", err);
      return;
    }
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(messages));
    });
  });
}

// Define um intervalo para enviar a mensagem para os clientes a cada segundo
setInterval(sendMessagesForClients, 1000);

// Evento de conexão com um cliente WebSocket
wss.on("connection", (ws, req) => {
  console.log("conexao aberta");
  const queryParams = url.parse(req.url, true).query;
  const idUser = queryParams.id;

  // Evento de recebimento de mensagem do cliente
  ws.on("message", (message) => {
    const messageClient = message.toString("utf8");
    console.log("Mensagem recebida do cliente:", messageClient);

    db.run(
      "INSERT INTO messages (text, user, date) VALUES (?, ?, ?)",
      [messageClient, idUser, new Date()],
      function (err) {
        if (err) {
          console.error("Erro ao inserir dados no banco de dados:", err);
          return;
        }
        console.log(
          `Dados inseridos com sucesso no banco de dados. ID: ${this.lastID}`
        );
      }
    );
  });

  // Evento de fechamento da conexão com o cliente
  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});
