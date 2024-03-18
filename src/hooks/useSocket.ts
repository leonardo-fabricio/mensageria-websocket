import { UserContext } from "@/contexts/User";
import { MessageInterface } from "@/interface/message";
import { useContext, useEffect, useState } from "react";

export default function useSocket() {
  const { user, setUser } = useContext(UserContext);
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  function handleMessages(data: MessageInterface) {
    setMessages((prev) => [...prev, data]);
  }

  useEffect(() => {
    const idUser = crypto.randomUUID();
    setUser(idUser);
    const socket = new WebSocket(`ws://localhost:8080/?id=${idUser}`);
    socket.addEventListener("open", () => {
      console.log("open conection");
    });
    socket.addEventListener("message", (msg) => {
      const { messages: MessagesServer } = JSON.parse(msg.data);

      if (messages.length != MessagesServer.length) setMessages(MessagesServer);
    });
  }, []);

  return { messages, setMessages: handleMessages };
}
