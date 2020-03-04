// eslint-disable-next-line
import React from "react";

import Layout from "../../../components/layout";
import SectionTitle from "../../../components/sectionTitle";
import * as Components from "../../../components/layoutComponents";
import VideoTutorialsMenu from "../../../components/videoTutorialsMenu";
import SEO from "../../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Video Tutoriales: Facturación"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Video Tutoriales" subtitle="Facturación" />
    <Components.Container>
      <VideoTutorialsMenu />
      <h4 className="unmargin-top text-center">Errores Frecuentes</h4>
      <Components.Row mobile justifyContent="center">
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Error: XML Mal formado Attribute &apos;Unidad&apos; mujst appear in
            &apos;Concepto&apos;
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/keffQUZa6y0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Error: XML Mal formado value &apos;RFC&apos; is not Faced-Valid with
            respect to pattern.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/5pPMh_ll_Yw"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
      <Components.Row mobile justifyContent="center">
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Error: No se puede insertar una fila clave duplicada en el objeto
            &apos;dbo.ventas&apos; índice único &apos;documento&apos;
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/N2pbA3M9MuM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Error: El certificado no es del tipo CSD. Que la llave utilizada
            corresponda a un CSD y no a la FIEL.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/ppm9xrHM--I"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Error Loading Page , en portal www.cfdimobile.com
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/CLont8dwrfU"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
      <hr />

      <h4 className="unmargin-top text-center">Formato de impresion</h4>
      <Components.Row mobile justifyContent="center">
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Habilitar las observaciones de la venta del Receptor
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/ViiAglu4bh8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Establecer el formato de impresión correcto para generar Facturas
            Electrónicas
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/gpYC34dYLoM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
      <Components.Row mobile justifyContent="center">
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Como colocar el logo a tu formato de factura
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/ARYp0eWO1pA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cambiar el domicilio de expedición
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/wio2lkfDqQ8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Eliminar el impuesto sólo en la descripción del producto
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/LmzAXIhZHNE"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
      <hr />

      <h4 className="unmargin-top text-center">Funcionalidad General</h4>
      <Components.Row mobile justifyContent="center">
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Consultar el número de timbres disponibles para facturar.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/xdKMaJ0SHAQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cómo capturar los datos de facturación.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/ARYp0eWO1pA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
      <Components.Row style={{ marginBottom: "3rem" }} mobile>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cómo dar de alta un cliente para facturar en MyBusiness POS.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/c0qJ8Ld5m9I"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cómo cancelar una Factura Electronica desde MyBusiness POS.
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/MJYw3yYfxxw"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cómo crear facturas desde el portal www.cfdimobile.com
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/NDraqRCPb2k"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
        <Components.Column padded style={{ textAlign: "center" }}>
          <p className="text-center font-sm">
            Cómo cambiar la contraseña del portal www.mycfdi.net
          </p>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/xl1dMFVqdJo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Components.Column>
      </Components.Row>
    </Components.Container>
  </Layout>
);

export default IndexPage;
