import { UserContext } from "@/contexts/User";
import { MessageInterface } from "@/interface/message";
import { use, useContext } from "react";
import styled from "styled-components";

interface MessageComponentProps {
  message: MessageInterface;
}

export function MessageComponent({ message }: MessageComponentProps) {
  const { user } = useContext(UserContext);
  return (
    <Message sentByMe={message.user == user}>
      <div>
        <strong>user:</strong>
        {message.user}
      </div>
      <strong>
        {"<"} {message.text} {">"}
      </strong>
    </Message>
  );
}

const Message = styled.div<{ sentByMe: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: max-content;
  max-width: 45%;
  flex-wrap: wrap;
  padding: 14px 12px;
  background: ${({ theme, sentByMe }) =>
    sentByMe ? theme.green700 : theme.blue};
  color: ${({ theme }) => theme.white};
  align-self: ${({ sentByMe }) => (sentByMe ? "flex-end" : "flex-start")};
  font-size: 14px;
  font-family: "Inter", sans-serif;
  flex-direction: column;
`;
