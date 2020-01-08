import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <Comp.Row>
        <Comp.Column>
          <FooterMenu>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Nosotros</Link>
            </li>
            <li>
              <Link to="/">Registro de Licencia</Link>
            </li>
            <li>
              <Link to="/">Cursos</Link>
            </li>
            <li>
              <Link to="/">Eventos</Link>
            </li>
            <li>
              <Link to="/">Contacto</Link>
            </li>
            <li>
              <Link to="/">Avisos</Link>
            </li>
          </FooterMenu>
        </Comp.Column>
      </Comp.Row>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #f0f4f6;
`;

const FooterMenu = styled.ul`
  padding: 1rem;
  padding-left: 0;
  list-style: none;

  li a {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.bodyLColor};
  }
`;

export default StyledFooter;
