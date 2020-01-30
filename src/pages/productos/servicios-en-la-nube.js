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
      <Comp.Width75 style={{ paddingBottom: "4rem" }}>
        <p className="font-lg">
          Los servicios en la nube de MyBusiness POS te permiten subir toda la
          información de tu negocio a un servidor online seguro. Desde aquí
          puedes acceder a tus ventas en tiempo real, controlar tus inventarios,
          cambiar precios, hacer respaldo de datos, obtener reportes de la
          operación de tus sucursales y hacer ventas en ruta.
        </p>
        <p className="font-lg">
          Y lo mejor de todo, es que puedes controlarlo desde tu celular gracias
          a nuestra aplicación Pos Tools.
        </p>
        <hr />
        <h3 className="text-center extended">
          ¿Cómo empiezo a usar la nube de MyBusiness?{" "}
        </h3>
        <p>
          <ol className="font-lg">
            <li>
              Lo primero que debes hacer es{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://postools.azurewebsites.net/registrarse.aspx"
              >
                {" "}
                registrarte aquí
              </a>
              *. Nuestro equipo se contactará contigo para darte seguimiento.{" "}
              <br />
              <br />
              <span className="font-sm body-l">
                *En este portal también puedes configurar los accesos a los
                módulos de tu punto de venta y establecer que equipos pueden
                subir o bajar información.{" "}
              </span>
            </li>
            <li>
              Una vez dado de alta,{" "}
              <a href="https://play.google.com/store/apps/details?id=postools.mybusinesspos.com">
                descarga Pos Tools en google store
              </a>{" "}
              y entra a tu cuenta.
            </li>
            <li>¡Listo! Ahora tienes acceso a tu negocio desde tu celular.</li>
          </ol>
        </p>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
