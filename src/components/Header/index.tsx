import styled from "styled-components";
import Image from "next/image";

export function HeaderComponent() {
  return (
    <Header>
      <ImageUser>
        <Image src={"/default-avatar.png"} layout="fill" alt="image user" />
      </ImageUser>
      <NameUser>FULANO DE TAL</NameUser>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 48px);
  height: 104px;
  background: ${({ theme }) => theme.green800};
  border-radius: 25px 25px 0 0;
  padding: 0 24px;
  gap: 24px;
`;

const ImageUser = styled.div`
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.green600};
    border-radius: 50%;
  }
`;
const NameUser = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-family: "Inter", sans-serif;
`;
