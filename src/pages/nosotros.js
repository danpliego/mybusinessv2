// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import SectionTitle from "../components/sectionTitle";

import HeroImage from "../images/contacto.jpg";
import * as Components from "../components/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Nosotros" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Nosotros" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} style={{ height: "650px" }} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <p>
              MyBusiness POS Desarrollos nació en 1991 como una empresa mexicana
              dedicada a la fabricación de software de punto de venta, control
              administrativo y facturación electrónica.
            </p>
            <p>
              Hasta la fecha hemos proveído soluciones a miles de comercios y
              empresas, buscando siempre que nuestros productos tengan un alto
              nivel competitivo funcional y comercial.
            </p>
            <p>
              Gracias a esto, en la actualidad somos líderes en México en el
              ramo de software de punto de venta.
            </p>
            <p>
              Agradecemos la confianza que nos han brindado durante todos estos
              años nuestros clientes, distribuidores y mayoristas. Pues nuestro
              crecimiento es gracias a ustedes.
            </p>
            <p>
              Si aún no formas parte de nuestra comunidad de usuarios, te
              invitamos a que te unas y lleves tu negocio a otro nivel. Solicita
              más información en{" "}
              <a href="mailto:Info@MyBusinessPOS.com">Info@MyBusinessPOS.com</a>
              .
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
