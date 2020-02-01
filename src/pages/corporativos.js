// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";

import HeroImage from "../images/corporativos/hero-image.jpg";
import SectionTitle from "../components/sectionCorporativosTitle";
import BoletinBanner from "../components/boletinBanner";

import Banner from "../images/corporativos/banner.png";
import { Link } from "gatsby";
import styled from "styled-components";

import Sucursales from "../images/corporativos/sucursales.png";
import Franquicias from "../images/corporativos/franquicias.png";
import Lealtad from "../images/corporativos/loyal.png";
import Conexion from "../images/corporativos/conexion.png";
import Distribuidores from "../images/corporativos/distribuidores.png";
import CorporativosForm from "../components/corporativos_form";
import { theme } from "../components/theme";

const IndexPage = () => (
  <Layout>
    <SEO title="Corporativos" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Corporativos" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          Tenemos una alta experiencia con cadenas. Si requieres control sobre
          tus sucursales, franquicias o distribuciones, nosotros somos tu
          solución.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <div style={{ background: "#F5F1EB" }}>
      <Comp.Width75>
        <Comp.Row mobile>
          <Comp.Column padded>
            <Comp.Row>
              <Comp.Column padded>
                <IconLink to="/">
                  <img src={Sucursales} />
                </IconLink>
              </Comp.Column>
              <Comp.Column padded>
                <h5>Control de Sucursales.</h5>
                <p>
                  Te proporcionamos las ventas e inventarios reales de tus
                  tiendas.
                </p>
              </Comp.Column>
            </Comp.Row>

            <hr />

            <Comp.Row>
              <Comp.Column padded>
                <IconLink to="/">
                  <img src={Franquicias} />
                </IconLink>
              </Comp.Column>
              <Comp.Column padded>
                <h5>Control de Franquicias.</h5>
                <p>
                  ¿Deseas tener control certero de lo que tus franquicias
                  venden? Controla ventas, traspasos intersucursales y más.
                </p>
              </Comp.Column>
            </Comp.Row>

            <hr />

            <Comp.Row>
              <Comp.Column padded>
                <IconLink to="/">
                  <img src={Lealtad} />
                </IconLink>
              </Comp.Column>
              <Comp.Column padded>
                <h5>Programas de lealtad</h5>
                <p>
                  ¿Quieres poder crear tus promociones y que estén en minutos en
                  todas tus tiendas? 4x3, 3x2, 2x1, producto gratis, cupones QR
                  de descuento, etc…
                </p>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
          <Comp.Column padded>
            <Comp.Row>
              <Comp.Column padded>
                <IconLink to="/">
                  <img src={Conexion} />
                </IconLink>
              </Comp.Column>
              <Comp.Column padded>
                <h5>Conexión con ERPs.</h5>
                <p>
                  Te proporcionamos las ventas e inventarios reales de tus
                  tiendas.
                </p>
              </Comp.Column>
            </Comp.Row>

            <hr />

            <Comp.Row>
              <Comp.Column padded>
                <IconLink to="/">
                  <img src={Distribuidores} />
                </IconLink>
              </Comp.Column>
              <Comp.Column padded>
                <h5>Control de Distribuciones.</h5>
                <p>
                  ¿Deseas tener control certero de lo que tus franquicias
                  venden? Controla ventas, traspasos intersucursales y más.
                </p>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
        </Comp.Row>
      </Comp.Width75>
    </div>
    <div style={{ background: "#Fff" }}>
      <Comp.Container>
        <Comp.Width75>
          <h4 style={{ marginBottom: "2rem", textAlign: "center" }}>
            La opinión de nuestros clientes es nuestra carta de presentación.
          </h4>
          <img src={Banner} />
        </Comp.Width75>
      </Comp.Container>
    </div>
    <Comp.Container>
      <Comp.Width75>
        <h5 style={{ marginBottom: "2rem", textAlign: "center" }}>
          Si requieres más información, déjanos tus datos y nos comunicaremos
          contigo.
        </h5>
        <CorporativosForm />
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;

const IconLink = styled(Link)`
  width: 5rem;
  height: 5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: inline-flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;

  @media ${theme.breakpoint.onlyMobile} {
    width: 3rem;
    height: 3rem;
  }

  img {
    width: 32px;
    height: auto;
  }
`;
