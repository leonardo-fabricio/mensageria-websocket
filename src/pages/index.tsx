import { ListMessagesComponent } from "@/components/ListMessages";
import { SendMessagesComponent } from "@/components/SendMessages";
import { MessageInterface } from "@/interface/message";
import Head from "next/head";
import { useRef, useState } from "react";
import styled from "styled-components";

const ArrayTest: MessageInterface[] = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user: "other",
    date: new Date(),
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user: "eu",
    date: new Date(),
  },
];

export default function Home() {
  const listRef = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<MessageInterface[]>(ArrayTest);
  return (
    <>
      <Head>
        <title>Messageria</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageContent>
          <ListMessagesComponent listRef={listRef} messageList={messageList} />
          <SendMessagesComponent
            listRef={listRef}
            setMessageList={setMessageList}
          />
        </PageContent>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.green900};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageContent = styled.div`
  width: 1344px;
  height: 926px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    width: 400px;
  }
`;
