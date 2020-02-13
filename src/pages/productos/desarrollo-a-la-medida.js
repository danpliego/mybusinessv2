// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/desarrollo-a-la-medida/hero-image.jpg";
import * as Components from "../../components/layoutComponents";
import SEO from "../../components/seo";
import ContactForm from "../../components/contact_form";
const IndexPage = () => (
  <Layout>
    <SEO
      title="Desarrollo a la medida"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Desarrollo a la medida" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width50>
            <p>
              Sabemos que puedes requerir que el software se modifique para
              adaptarse al funcionamiento de tu negocio. MyBusiness POS tiene la
              importante característica de poder ser adecuado por programación.
              <br />
              <br />
              Si requieres más información déjanos tus datos y haznos saber que
              te gustaría modificar en el sistema.
            </p>
            <ContactForm />
          </Components.Width50>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
