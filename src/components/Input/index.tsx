import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export function InputComponent(props: InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...props} />;
}

const Input = styled.input`
  width: calc(100% - 42px);
  height: 50px;
  border-radius: 50px;
  background: ${({ theme }) => theme.white100};
  font-size: 14px;
  outline: 0;
  margin: 0px;
  padding: 0 0 0 42px;
  border: none;
`;
