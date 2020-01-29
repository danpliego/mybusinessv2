import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";
import HeroImage from "../images/home/banner-image.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Contacto" />
    <Components.BannerContainer>
      <img src={HeroImage} />
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "2rem" }}>
            <p>
              Horario de atención:{" "}
              <strong>Lun-Vie de 8:00 a 18:00 hora central.</strong>
            </p>
            <br />
            <p className="body-xl-color">
              Por este medio no se brinda Soporte Técnico. Si lo requiere, favor
              de dar <a href="#">clic aqui</a>
            </p>
            <br />
            <iframe
              src="https://www.mybusinesspos.com/contacto.aspx"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
