import styled from "styled-components";
import { HeaderComponent } from "../Header";
import { MessageInterface } from "@/interface/message";
import { MessageComponent } from "../Message";
import { RefObject, SetStateAction, useContext, useEffect } from "react";
import { UserContext } from "@/contexts/User";

interface ListMessagesComponentProps {
  messageList: MessageInterface[];
  setMessageList: (state: MessageInterface) => void;
  listRef: RefObject<HTMLDivElement>;
}

export function ListMessagesComponent({
  messageList,
  listRef,
  setMessageList,
}: ListMessagesComponentProps) {
  return (
    <ListMessages>
      <HeaderComponent />
      <MessagesContainer ref={listRef}>
        {messageList.map((message, index) => {
          return <MessageComponent message={message} key={index} />;
        })}
      </MessagesContainer>
    </ListMessages>
  );
}

const ListMessages = styled.div`
  border-radius: 25px;
  width: 100%;
  height: 852px;
  background: ${({ theme }) => theme.white100};

  @media (max-width: 1200px) {
    height: calc(100% - 98px);
  }
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  width: calc(100% - 48px);
  max-height: 684px;
  overflow: auto;
  scrollbar-width: none;

  @media (max-width: 1200px) {
    padding: 12px;
    max-height: calc(100% - 86px);
    width: calc(100% - 24px);
  }
`;
