const WebSocket = require("ws");
const url = require("url");

// Cria um servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Função para enviar uma mensagem para todos os clientes conectados
function sendMessagesForClients() {
  //     const queryParams = url.parse(req.url, true).query;
  //   const idUser = queryParams.id
  const data = {
    messages: [{ text: "Minha mensagem", user: "eu", date: new Date() }],
  };
  wss.clients.forEach((cliente) => {
    cliente.send(JSON.stringify(data));
  });
}

// Define um intervalo para enviar a mensagem para os clientes a cada segundo
setInterval(sendMessagesForClients, 1000);

// Evento de conexão com um cliente WebSocket
wss.on("connection", (ws, req) => {
  console.log("conexao aberta");

  // Evento de fechamento da conexão com o cliente
  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});
