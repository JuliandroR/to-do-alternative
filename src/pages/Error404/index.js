import React from "react";

import { Container, Image, Description, Title404 } from "./styles";
import Button from "../../components/Button";

const img_404 = require("../../assets/img/404.gif");

function Error404() {
  return (
    <Container>
      <Image src={img_404} />
      <Title404>Erro 404</Title404>
      <Description>A página solicitada não foi encontrada</Description>
      <Button onPress={() => {}} text="Voltar" />
    </Container>
  );
}

export default Error404;
