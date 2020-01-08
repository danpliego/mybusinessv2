import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <Comp.Container>
      <Comp.Row>
        <Comp.Column flex={1}>
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
        <Comp.Column flex={1}>
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
        <Comp.Column flex={1}>
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
        <Comp.Column flex={1}>
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
      <BodyFooter>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </BodyFooter>
    </Comp.Container>
  </footer>
);

const StyledFooter = styled(Footer)`
  background: red;
  padding: 1rem 0;
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

const BodyFooter = styled.div`
  text-align: center;
  padding: 1rem;
`;

export default StyledFooter;
