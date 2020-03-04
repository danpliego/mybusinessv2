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
          Controla todas tus sucursales o franquicias desde cualquier lugar.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ paddingBottom: "4rem" }}>
        <p className="font-lg">
          Los Servicios en la Nube de MyBusiness POS te permitirán subir y
          respaldar la información relevante de tu negocio en servidores seguros
          y confiables. Desde tu celular podrás acceder a las ventas
          prácticamente en tiempo real, conocer tu inventario, cambiar precios y
          generar reportes de inteligencia de negocio de tus sucursales o
          franquicias.
        </p>
        <p className="font-lg">
          Y lo mejor de todo, es que puedes controlarlo desde tu celular gracias
          a nuestra aplicación Pos Tools.
        </p>
        <hr />
        <h3 className="text-center extended">
          ¿Cómo empiezo a usar la nube de MyBusiness POS?
        </h3>
        <p>
          <ol className="font-lg">
            <li>
              Lo que debes hacer es{" "}
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
                *En nuestro portal podrás configurar los accesos a los módulos
                de tu punto de venta y establecer cuáles equipos pueden subir o
                bajar información.
              </span>
            </li>
          </ol>
        </p>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
