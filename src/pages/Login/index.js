import React from "react";

import { Container, ContainerLogin, Form } from "./styles";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

function Login() {
  return (
    <Container>
      <ContainerLogin>
        <Title>Área de Acesso</Title>
          <Input
            value=""
            placeholder="Digite seu código de Acesso"
            onChange={() => {}}
          />

          <Button text="Acessar" />
      </ContainerLogin>
      <Footer />
    </Container>
  );
}

export default Login;
