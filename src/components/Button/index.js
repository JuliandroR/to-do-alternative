import React from "react";
import styled from "styled-components";

export const Botao = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: var(--charcoal);
  background-color: var(--red);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    color: var(--red);
    background-color: var(--charcoal);
  }
`;

function Button(props) {
  return <Botao onPress={props.onPress}>{props.text}</Botao>;
}

export default Button;
