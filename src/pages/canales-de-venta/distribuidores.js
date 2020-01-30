import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/soporte/hero-image.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Distribuidores" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Distribuidores" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.Container>
        <Comp.BannerBox>
          <Comp.Width75>
            <p>
              ¿Busca un distribuidor en su zona? De un click en la flecha y se
              desplegara el catalogo de estados.
            </p>
            <iframe
              src="https://www.mybusinesspos.com/distribuidores.aspx"
              width="100%"
              height="300px"
              frameBorder="0"
            ></iframe>
            <hr />
            <h5 className="text-center">
              ¿Quieres ser distribuidor?{" "}
              <a href="/canales-de-venta/ser-distribuidor">
                Cónoce los requisitos
              </a>
            </h5>
          </Comp.Width75>
        </Comp.BannerBox>
      </Comp.Container>
    </Comp.BannerContainer>
  </Layout>
);

export default IndexPage;
