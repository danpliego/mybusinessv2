// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/descargas.jpg";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Descargas: Facturación Electrónica"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Descargas: Facturación Electrónica" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "3rem" }}>
            <h4
              className="extended text-center"
              style={{ marginBottom: "2rem" }}
            >
              Instala para comenzar a facturar desde MyBusiness POS.{" "}
            </h4>
            <p>
              Descarga el módulo de facturación electrónica: para cada
              versión de MyBusiness POS.{" "}
             <p>
                                SQLCloud Versión 20:{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.mybusinesspos.com/Downloads/SQLCLoudv20.zip"
                                >
                                    Descargar
              </a>
             </p>
             <p>
                                SQLCloud Versión 2017:{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.mybusinesspos.com/Downloads/SQLCLoud.zip"
                                >
                                    Descargar
              </a>
             </p>
             </p>
                        <p>
                            Fin de soporte para MyCFDI Julio de 2021, en caso de haber un cambio por parte del SAT, este ya no estara disponible a partir de esa fecha.
                        </p>
            <p>
              MyCFDI Versión 2012 y anteriores:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mybusinesspos.com/Downloads/MyCFDI.zip"
              >
                Descargar
              </a>
            </p>
            <p>
              Si ya utilizaste tu timbre de prueba,{" "}
              <a href="/tienda-virtual/timbres-fiscales">
                entra aquí para comprar más Timbres Fiscales
              </a>
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
