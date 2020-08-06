import React from "react";
import styled from "styled-components";

const Style = styled.input`
  width: 90%;
  min-width: 300px;
  height: 40px;

  border: none;
  border-bottom: solid 2px var(--charcoal);
  color: rgba(48, 52, 55, 0.8);
  background-color: rgba(0, 0, 0, 0);
  padding-left: 20px;
  margin: 20px 0;

  &::placeholder {
    color: rgba(48, 52, 55, 0.4);
  }
`;

function Input(props) {
  return (
    <Style
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default Input;
