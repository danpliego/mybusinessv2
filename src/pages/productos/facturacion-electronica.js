// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/facturacion/hero-image.jpg";
import SectionTitle from "../../components/sectionTitle";
import BoletinBanner from "../../components/boletinBanner";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Facturación Electrónica"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Facturación Electrónica" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          Mantén en orden las finanzas de tu negocio con nuestro sistema de
          facturación electrónica.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ paddingBottom: "5rem" }}>
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Estos son algunos de los beneficios de emitir facturas en tu
          establecimiento:{" "}
        </h4>
        <ul className="font-xl">
          <li>Facilidad al realizar auditorías.</li>
          <li>Reducción de falsificaciones.</li>
          <li>Mejor control para una sana contabilidad electrónica.</li>
          <li>Facilidad en el cálculo de impuestos.</li>
          <li>Confidencialidad en el manejo de la información.</li>
          <li>Eficiencia en el proceso de pago de facturas.</li>
        </ul>
        <hr />
        <p className="font-xl body-l">
          Además, puedes hacerlo desde tu punto de venta o desde el portal de
          facturación.{" "}
        </p>
        <hr />
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Para empezar a Facturar Electrónicamente solo debes seguir estos
          pasos:
        </h4>
        <ul className="font-xl">
          <li>Tramita un certificado de sello digital, con tu Fiel.</li>
          <li>
            <a href="https://cfdimobile.mybusinesspos.net/Registrarse.aspx">
              Date de alta
            </a>{" "}
            y obtendrás 1 folio de prueba
          </li>
          <li>
            <a href="https://www.mybusinesspos.com/Downloads/SQLCLoud.zip">
              Descarga
            </a>{" "}
            e instala nuestro módulo de Facturación Electrónica: SQLCloud (Para
            MyBusiness POS 2017 Actualización){" "}
          </li>
          <li>
            <a href="https://www.mybusinesspos.com/Downloads/MyCFDI.zip">
              Descarga
            </a>{" "}
            e instala el módulo de Facturación Electrónica: MyCFDI (Para
            MyBusiness POS 2012 y anteriores)
          </li>
          <li>
            Después de utilizar tu timbre de prueba, puedes comprar Timbres
            Fiscales <Link to="/tienda-virtual/timbres-fiscales/">aquí.</Link>
          </li>
        </ul>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
