import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";
import { theme } from "./theme";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <FooterContent>
        <Comp.Row mobile>
          <Comp.Column flex={1}></Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu>
              <li>
                <Link to="/">Nosotros</Link>
              </li>
              <li>
                <Link to="/">Aviso de privacidad</Link>
              </li>
              <li>
                <Link to="/">Registro de licencias</Link>
              </li>
              <li>
                <Link to="/">Homologaciones</Link>
              </li>
            </FooterMenu>
          </Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu>
              <li>
                <Link to="/">Canales de venta</Link>
              </li>
              <li>
                <Link to="/">Centros de servicio</Link>
              </li>
              <li>
                <Link to="/">Distribuidores certificados</Link>
              </li>
            </FooterMenu>
          </Comp.Column>
        </Comp.Row>
      </FooterContent>
      <BodyFooter>
        © {new Date().getFullYear()}, MyBusiness POS Desarrollos, S. A. de C. V.
      </BodyFooter>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: ${theme.colors.grayColor};
`;

const FooterMenu = styled.ul`
  padding: 1rem;
  padding-left: 0;
  list-style: none;

  li {
    margin-bottom: 0.33rem;
  }

  li a {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.bodyLColor};

    &:hover {
      color: ${props => props.theme.colors.bodyColor};
    }
  }
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  color: ${theme.colors.bodyLColor};
  border-top: 1px solid ${theme.colors.whiteColor};
`;

const FooterContent = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.whiteColor};
`;

export default Footer;
