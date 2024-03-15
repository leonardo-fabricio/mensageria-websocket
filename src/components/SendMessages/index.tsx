import styled from "styled-components";
import { InputComponent } from "../Input";
import Image from "next/image";
import { ButtonComponent } from "../Button";
import { RefObject, SetStateAction, useState } from "react";
import { MessageInterface } from "@/interface/message";

interface SendMessagesComponentProps {
  setMessageList: (state: SetStateAction<MessageInterface[]>) => void;
  listRef: RefObject<HTMLDivElement>;
}

export function SendMessagesComponent({
  setMessageList,
  listRef,
}: SendMessagesComponentProps) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    setMessageList((prev) => [
      ...prev,
      { text: value, user: "eu", date: new Date() },
    ]);

    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <SendMessage>
      <InputComponent
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Escreva sua mensagem..."
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <ButtonComponent onClick={handleSubmit}>
        <Image src={"/send.png"} alt="icon send" height={20} width={20} />
      </ButtonComponent>
    </SendMessage>
  );
}

const SendMessage = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  display: flex;
  gap: 24px;
`;
