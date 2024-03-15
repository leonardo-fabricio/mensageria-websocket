import { MessageInterface } from "@/interface/message";
import styled from "styled-components";

interface MessageComponentProps {
  message: MessageInterface;
}

export function MessageComponent({ message }: MessageComponentProps) {
  return <Message sentByMe={message.user == "eu"}>{message.text}</Message>;
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
`;
