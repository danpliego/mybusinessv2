// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/tiempo-aire/hero-image.jpg";
import SectionTitle from "../../components/sectionTitle";
import BoletinBanner from "../../components/boletinBanner";

const IndexPage = () => (
  <Layout>
    <SEO title="Tiempo Aire" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Venta de tiempo aire" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          ¿Sabías que 88 de cada 100 mexicanos cuentan con un celular, y el 82%
          consume recargas electrónicas? Es por esto que vender tiempo aire
          asegura un mayor flujo de clientes en tu negocio.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75>
        <p>
          Pero… ¿Cuál es la ganancia para mí? Además de atraer más clientes,
          nuestro servicio de Tiempo Aire otorga las comisiones más altas del
          mercado. Y lo mejor de todo es que no hay restricciones, puedes
          ofrecer recargas para todas las compañias y pago de servicios. Todo
          esto, desde MyBusiness POS o desde nuestro portal de tiempo aire.
        </p>
        <p>
          Para comenzar a vender solo debes registrarte y generar un usuario y
          contraseña. Puedes hacerlo de alguna de las siguientes formas:
        </p>
        <ul>
          <li>
            Si cuentas con la App de POS Tools, solo ingresa tus datos en Venta
            de Tiempo Aire.
          </li>
          <li>
            A través de un distribuidor o escribiéndonos directamente a:
            <a href="mailto:tiempoaire@mybusinespos.com">
              tiempoaire@mybusinespos.com
            </a>
          </li>
        </ul>
        <h4>
          Si tienes la versión actual de MyBusiness POS, no necesitas
          registrarte, esta ya contiene tus datos para vender tiempo aire.{" "}
        </h4>
        <p>
          Para versiones anteriores a la 2017, descarga el módulo de servicios y
          sigue este tutorial para instalarlo.
        </p>
        <p>
          Una vez dado de alta, ya puedes hacer tu compra de saldo. El monto
          mínimo inicial es de $1000 y puedes dividirlo entre las distintas
          compañías.
        </p>
        <p>
          Estas son las cuentas bancarias a las que debes hacer el depósito o
          transferencia:
        </p>
        <p>
          MyBusiness POS Desarrollos, S.A. de C.V. <br />
          BANAMEX <br />
          Suc. 7006 Cta. 6716358 <br />
          CLABE: 002420700667163585
        </p>
        <p>
          MyBusiness POS Desarrollos, S.A. de C.V. <br />
          BANCOMER <br />
          Suc. 0114 Cta 0197188706 <br />
          CLABE: 012441001971887063
        </p>
        <p>
          Para último, reporta el pago desde MyBusiness POS en el módulo de
          tiempo aire. O bien, si ya estás registrado, repórtalo desde el
          portal.
        </p>
      </Comp.Width75>
    </Comp.Container>

    <BoletinBanner />
  </Layout>
);

export default IndexPage;
