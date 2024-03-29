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
        <div className="text-center">
          <Comp.ButtonInverse to="/tienda-virtual/timbres-fiscales/">
            Comprar timbres fiscales
          </Comp.ButtonInverse>
        </div>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ paddingBottom: "5rem" }}>
        <h4 className="extended text-center" style={{ marginBottom: "2rem" }}>
          Ligas de descarga de CFDI 4.0
        </h4>

        <a href="https://mybusinesspos.com/Downloads/SetupMyCFDI.zip">
          SetupMyCFDI.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/SetupMyCFDIv17.zip">
          SetupMyCFDIv17.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/SetupMyCFDIv20.zip">
          SetupMyCFDIv20.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/CFDI4.0_Act.zip">
          CFDI4.0_Act.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/CFDI_4.0_Nomina_1.2.zip">
          CFDI_4.0_Nomina_1.2.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/CFDI_4.0_Pagos_2.0.zip">
          CFDI_4.0_Pagos_2.0.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/CFDI_4.0_Carta_Porte_V2.0.zip">
          CFDI_4.0_Carta_Porte_V2.0.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/CFDI_4.0_IEDU_1.0.zip">
          CFDI_4.0_IEDU_1.0.zip
        </a>
        <br />
        <a href="https://mybusinesspos.com/Downloads/MyBusiness_11-17_Inst_Nueva.zip">
          MyBusiness_11-17_Inst_Nueva.zip
        </a>

        <h4 className="extended text-center" style={{ margin: "2rem 0" }}>
          Estos son algunos de los beneficios de emitir facturas en tu
          establecimiento con nosotros:
        </h4>
        <ul className="font-xl">
          <li>
            Podrás generar las facturas fácil y rápidamente a tus clientes.
          </li>
          <li>
            Tendrás un portal para visualizar, reportar, cancelar y descargar
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
            Para actualización MyBusiness POS v20:{" "}
            <a href="https://www.mybusinesspos.com/Downloads/SQLCLoudv20.zip">
              Descarga
            </a>{" "}
            e instala nuestro módulo de Facturación Electrónica SQLCloud.
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
            <p>
              Fin de soporte para MyCFDI Julio de 2021, en caso de haber un
              cambio por parte del SAT, este ya no estara disponible a partir de
              esa fecha.
            </p>
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
