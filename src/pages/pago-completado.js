import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";
import HeroImage from "../images/contacto.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Pago completado" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Su pago ha sido completado con exito" />
    <Components.BannerContainer>
      <Components.BannerImage style={{ height: "500px" }}>
        <img src={HeroImage} style={{ marginTop: '-200px' }} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <div style={{ textAlign: 'center' }}>
              <p>
                En breve te llegará un correo con tu número de serie.
              </p>
              <p>
                Para más información escríbenos: 
                <br />
                <a href="mailto:info@mybusinesspos.com">info@mybusinesspos.com</a>
              </p>
            </div>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
