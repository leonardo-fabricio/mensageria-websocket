import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export function ButtonComponent(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <Button {...props} />;
}

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 50px;
  width: 75px;
  height: 50px;
  cursor: pointer;
  :active {
    opacity: 0.6;
  }
`;
