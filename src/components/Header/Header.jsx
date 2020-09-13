import React from "react";
import config from "../../../data/SiteConfig";
import { Container, Title } from "./style";

const Header = () => (
  <Container>
    <Title>{config.siteTitleShort}</Title>
  </Container>
);

export default Header;
