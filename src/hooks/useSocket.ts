import { UserContext } from "@/contexts/User";
import { MessageInterface } from "@/interface/message";
import { useContext, useEffect, useState } from "react";
import { uuid } from "uuidv4";

export default function useSocket() {
  const { setUser } = useContext(UserContext);
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [socket, setSocket] = useState<WebSocket>();

  function handleMessages(data: MessageInterface) {
    setMessages((prev) => [...prev, data]);
    socket?.send(data.text);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    let user = "";
    if (data) {
      setUser(data);
      user = data;
    } else {
      const idUser = uuid();
      setUser(idUser);
      user = idUser;
      window.localStorage.setItem("user", idUser);
    }
    const s = new WebSocket(`ws://localhost:8080/?id=${user}`);
    setSocket(s);

    s.addEventListener("open", () => {
      console.log("open conection");
    });
    s.addEventListener("message", (msg) => {
      const MessagesServer = JSON.parse(msg.data);
      if (messages.length != MessagesServer.length) setMessages(MessagesServer);
    });
  }, []);

  return { messages, setMessages: handleMessages };
}
