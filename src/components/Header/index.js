import React from "react";
import { Container } from "./styles";
import Capitan from "../../assets/img/capita-marvel.jpg";

const Header = () => {
  return (
    <Container>
      <img src={Capitan} alt="capitã" />
    </Container>
  );
};

export default Header;
