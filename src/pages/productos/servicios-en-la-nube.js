// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import BoletinBanner from "../../components/boletinBanner";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/servicios-en-la-nube/hero-image.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Servicios en la nube"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Servicios en la nube" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          Controla todas tus sucursales desde cualquier lugar.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75>
        <p>
          Los servicios en la nube de MyBusiness POS te permiten subir toda la
          información de tu negocio a un servidor online seguro. Desde aquí
          puedes acceder a tus ventas en tiempo real, controlar tus inventarios,
          cambiar precios, hacer respaldo de datos, obtener reportes de la
          operación de tus sucursales y hacer ventas en ruta.
        </p>
        <p>
          Y lo mejor de todo, es que puedes controlarlo desde tu celular gracias
          a nuestra aplicación Pos Tools.{" "}
        </p>
        <p>
          Para comenzar a usar este servicio lo primero que debes hacer es
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://postools.azurewebsites.net/registrarse.aspx"
            >
              {" "}
              registrarte aquí
            </a>
          </strong>
          . Nuestro equipo se contactará contigo para darte seguimiento.
        </p>
        <p className="body-l font-xs">
          *En este portal también puedes configurar los accesos a los módulos de
          tu punto de venta y establecer que equipos pueden subir o bajar
          información.{" "}
        </p>
        <p>
          Una vez dado de alta, descarga Pos Tools y descubre lo fácil que es
          operar tu negocio desde tu celular.{" "}
        </p>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
