import React from "react";

import { Container, Logo } from "./styles";
import Button from "../Button";

const logo = require("../../assets/img/logo.svg");

function Header() {
  return (
    <>
      <Container>
        <Logo src={logo} />

        <Button text={"Criar Novo"} onPress={() => {}} />
      </Container>
    </>
  );
}

export default Header;
