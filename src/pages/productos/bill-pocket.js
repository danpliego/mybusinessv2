// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";

import HeroImage from "../../images/bill-pocket/hero-image.jpg";
import SectionTitle from "../../components/sectionTitle";
import { BlueArea } from "..";
import BoletinBanner from "../../components/boletinBanner";

const IndexPage = () => (
  <Layout>
    <SEO title="Bill Pocket" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle
      name="Bill Pocket"
      subtitle="Acepta pagos con tarjeta y aumenta tus ventas. "
    />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
          No importa si tienes una tiendita, un minisúper, o si eres
          emprendedor; con Billpocket puedes recibir pagos de manera rápida,
          fácil y segura.
        </h1>
      </Comp.BannerContent>
    </Comp.BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ textAlign: "center", paddingBottom: "0" }}>
        <p className="font-lg">
          Los lectores Billpocket son tan seguros como una terminal bancaria
          tradicional, ya que cifran el contenido de la banda magnética o chip
          para proteger los datos de tu cliente.
        </p>
        <iframe
          width="700"
          height="405"
          src="https://www.youtube.com/embed/yn-cPX0uNig"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="font-lg">
          Si llegara a ocurrir un robo o extravío de tu lector, no pueden
          extraer tu información ni la de tus clientes. Sólo puede ser utilizado
          con nuestra aplicación y sólo con los dispositivos (smartphones y
          tablets) que hayas dado de alta en tu administrador web.
        </p>
      </Comp.Width75>
      <BlueArea style={{ marginTop: "4rem", paddingTop: "3rem" }}>
        <Comp.Width75>
          <h2 className="extended text-center">
            Ventajas de cobrar con Billpocket
          </h2>
          <ul className="font-xl">
            <li>Paga sólo el 3.5% + IVA de comisión.</li>
            <li>Recibe el dinero de tus ventas al siguiente día hábil.</li>
            <li>
              Tienes cobertura nacional, sólo necesitas una conexión a internet.
            </li>
            <li>
              Ofrece promociones a 3, 6, 9 y hasta 12 meses con o sin intereses
              en tus ventas.
            </li>
            <li>
              Recibe notificaciones de cada transacción realizada, tus depósitos
              y facturas recibidas.
            </li>
          </ul>
        </Comp.Width75>
      </BlueArea>
      <Comp.Width75>
        <h2 className="extended text-center">
          ¿Cómo empiezo a usar el servicio?
        </h2>
        <ul className="font-xl">
          <li>
            Lo primero que debes hacer es{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://registro.billpocket.com/"
            >
              crear tu cuenta.
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f6efac64c4ed5&mfid=1582814350879_f6efac64c4ed5#/checkout/openButton"
            >
              Compra tu lector aquí
            </a>
            , lo recibirás en tu domicilio en un máximo de 3 días hábiles
            después de tu compra.{" "}
          </li>
          <li>
            Descarga la aplicación de Billpocket a tu dispositivo iOS o Android.
          </li>
          <li>¡Listo! ya estás más cerca de recibir pagos con tarjeta. </li>
        </ul>
      </Comp.Width75>
    </Comp.Container>
    <BoletinBanner />
  </Layout>
);

export default IndexPage;
