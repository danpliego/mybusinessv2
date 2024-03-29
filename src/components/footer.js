import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";
import { theme } from "./theme";

import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import Instagram from "../images/icons/instagram.svg";
import Youtube from "../images/icons/youtube.svg";
import ChatIcon from "../images/chat-icon.svg";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <FooterContent>
        <Comp.Row mobile>
          <Comp.Column flex={1}>
            <FooterMenu>
              <h6>MyBusiness POS Desarrollos</h6>
              <li>
                <Link target="_parent" to="/nosotros/">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/registro-de-licencias/">
                  Registro de licencias
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/homologaciones">
                  Homologaciones
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/corporativos">
                  Corporativos
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/descargas">
                  Descargas
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/aviso-de-privacidad/">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/politicas/">
                  Políticas de Venta, Entrega, Cancelación y Servicio
                </Link>
              </li>
            </FooterMenu>
          </Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu>
              <h6>Productos</h6>
              <li>
                <Link target="_parent" to="/productos/my-business">
                  MyBusiness POS
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/productos/facturacion-electronica">
                  Facturación electrónica
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/productos/tiempo-aire">
                  Tiempo Aire
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/productos/servicios-en-la-nube">
                  Servicios en la Nube
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/productos/pos-tools">
                  Pos Tools
                </Link>
              </li>
              {/* <li>
                <Link target="_parent" to="/productos/bill-pocket">
                  BillPocket
                </Link>
              </li> */}
              <li>
                <Link target="_parent" to="/productos/desarrollo-a-la-medida">
                  Desarrollo a la medida
                </Link>
              </li>
            </FooterMenu>
          </Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu style={{ marginBottom: "0" }}>
              <h6>Canales de Venta</h6>
              <li>
                <Link
                  target="_parent"
                  to="/canales-de-venta/centros-de-servicio/"
                >
                  Centros de servicio
                </Link>
              </li>
              <li>
                <Link target="_parent" to="/canales-de-venta/distribuidores/">
                  Distribuidores certificados
                </Link>
              </li>
            </FooterMenu>

            <FooterMenu>
              <h6>Redes Sociales</h6>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.facebook.com/MyBusinessPOSD/"
                target="_parent"
              >
                <img src={Facebook} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.instagram.com/mybusinessposd/"
                target="_parent"
              >
                <img src={Instagram} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://twitter.com/mybusinessposd"
                target="_parent"
              >
                <img src={Twitter} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.youtube.com/user/MyBusinessPOSD"
                target="_parent"
              >
                <img src={Youtube} />
              </a>
            </FooterMenu>
          </Comp.Column>
        </Comp.Row>
      </FooterContent>
      <FloatingButton href="javascript:void(window.open('https://chat.mybusinesspos.net/chat.php?a=a1da5','','width=590,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))">
        <img src={ChatIcon} />{" "}
        <strong style={{ marginLeft: "0.5rem" }}>Chat</strong>
      </FloatingButton>
      <BodyFooter>
        © {new Date().getFullYear()}, MyBusiness POS Desarrollos, S. A. de C. V.
      </BodyFooter>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: ${theme.colors.bodyColor};
  color: ${(props) => props.theme.colors.whiteColor};
`;

const FooterMenu = styled.ul`
  padding: 1rem;
  padding-left: 0;
  list-style: none;

  h6 {
    color: #fff;
  }

  li {
    margin-bottom: 0.33rem;
  }

  li a {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.whiteColor};
    opacity: 0.8;

    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.colors.whiteColor};
    }
  }
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid ${theme.colors.bodyLColor};
`;

const FooterContent = styled.div`
  padding-top: 2rem;
`;

const FloatingButton = styled.a`
  display: block;
  position: fixed;
  bottom: 2rem;
  border-radius: 3.5rem;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2rem;
  background: ${(props) => props.theme.colors.primaryColor};
  z-index: 1000;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: translate(0px, -2px);
  }

  img {
    width: 1.25rem;
  }
`;

export default Footer;
