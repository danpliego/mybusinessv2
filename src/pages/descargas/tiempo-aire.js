// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/descargas.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Descargar Tiempo Aire"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Descargas: Tiempo Aire" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <h4
              className="extended text-center"
              style={{ marginBottom: "2rem" }}
            >
              Descarga aquí el instalable para vender recargas desde MyBusiness
              POS.
            </h4>
            <p>
              Venta de tiempo aire para todas las versiones de MyBusiness POS.
            </p>
            <div style={{ textAlign: "center", padding: "1rem 0 3rem" }}>
              <h5 className="extended">
                Instalador de Servicios TAE 2006-2012
              </h5>
              <Components.ButtonPrimary
                as="a"
                to="http://mybusinesspos.com/Downloads/TiempoAireyServicios2006.zip"
              >
                Descarga
              </Components.ButtonPrimary>
            </div>
            <p>
              Si necesitas ayuda para seguir el proceso de instalación, da{" "}
              <a href="https://www.youtube.com/watch?v=WZbuV88yZfs&list=PLNwhWvS6gVedFLBEK3eBnf_md-yUS6-zI">
                clic aquí{" "}
              </a>
              para ver los tutoriales.
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
