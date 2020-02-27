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
          Genera facturas electrónicas para tus clientes de forma fácil.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ paddingBottom: "5rem" }}>
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Estos son algunos de los beneficios de emitir facturas en tu
          establecimiento con nosotros:
        </h4>
        <ul className="font-xl">
          <li>
            Podrás generar las facturas fácil y rápidamente a tus clientes.
          </li>
          <li>
            Tendrás un portal para visualizar, reportear, cancelar y descargar
            tus facturas.
          </li>
          <li>
            Podrás adquirir paquetes de facturas fiscales según tus necesidades.
          </li>
          <li>Confidencialidad en el manejo de la información.</li>
        </ul>
        <hr />
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Puedes generar facturas electrónicas de dos maneras:
        </h4>
        <ol>
          <li className="font-xl">
            Si usas MyBusiness POS puedes instalar los módulos para generar las
            facturas directamente desde tu software.
          </li>
          <li className="font-xl">
            Si no usas MyBusiness POS puedes generar facturas directamente{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cfdimobile.mybusinesspos.net/"
            >
              desde nuestro portal
            </a>
          </li>
        </ol>
        <hr />
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Para empezar a Facturar Electrónicamente sólo debes seguir estos
          pasos:
        </h4>
        <ul className="font-xl">
          <li>
            Tramita ante el SAT con tu FIEL un certificado de sello digital
          </li>
          <li>
            <a href="https://cfdimobile.mybusinesspos.net/Registrarse.aspx">
              Date de alta
            </a>{" "}
            y obtendrás 1 folio de prueba
          </li>
          <li>
            Para actualización MyBusiness POS 2017:{" "}
            <a href="https://www.mybusinesspos.com/Downloads/SQLCLoud.zip">
              Descarga
            </a>{" "}
            e instala nuestro módulo de Facturación Electrónica SQLCloud.
          </li>
          <li>
            Para MyBusiness POS 2012 y anteriores:{" "}
            <a href="https://www.mybusinesspos.com/Downloads/MyCFDI.zip">
              Descarga
            </a>{" "}
            e instala el módulo de Facturación Electrónica MyCFDI.
          </li>
          <li>
            Después de utilizar tu folio de prueba, puedes comprar Facturas
            Electrónicas{" "}
            <Link to="/tienda-virtual/timbres-fiscales/">aquí.</Link>
          </li>
        </ul>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
