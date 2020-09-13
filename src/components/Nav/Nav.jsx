import React from "react";
import { Link } from "gatsby";
import { Container, List, ListItem } from "./style";

const Nav = () => (
  <Container>
    <List>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
      <ListItem>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </ListItem>
    </List>
  </Container>
);

export default Nav;
