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
      title="Video Tutoriales: MyBusiness POS"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Video Tutoriales" subtitle="MyBusiness" />
    <Components.Container>
      <VideoTutorialsMenu />
      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Primeros Pasos
      </h4>
      <Components.FlexContainer>
        <Components.Column padded>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/j500GzCS8j0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">¿Qué es MyBusiness POS?</p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/rXGJ4TdAb0c"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Como instalar MyBusiness POS V.2012 en Windows 8 u 8.1
          </p>
        </Components.Column>

        <Components.Column padded>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/37DBmS9Z5UA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Como registrar MyBusiness POS V.2012.
          </p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/LxV52wumQcE"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Cómo instalar SQL Server Managment Studio
          </p>
        </Components.Column>
      </Components.FlexContainer>
      <hr />
      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Errores Frecuentes
      </h4>
      <Components.FlexContainer>
        <Components.Column padded>
          <h6 className="text-center">
            Errores frecuentes en la versión Delta 2006
          </h6>
          <iframe
            width="500"
            height="200"
            src="https://www.youtube.com/embed/2Fzg8-Swn64"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="font-sm text-center">
            No se encontro el elemento en la colección en la línea 272.
          </p>
        </Components.Column>
        <Components.Column padded>
          <h6 className="text-center">
            Errores más frecuentes de la Versión 2012
          </h6>
          <Components.FlexCenterChild>
            <Components.Column padded style={{ textAlign: "center" }}>
              <iframe
                width="350"
                height="200"
                src="https://www.youtube.com/embed/OV9JlCMKhtE"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <p className="font-sm text-center">
                Exíste un error al intentar hacer la conexión. No se puede abrir
                la base de datos, solicitada por el inicio de sesión. Código
                duro 5.
              </p>
            </Components.Column>
            <Components.Column padded style={{ textAlign: "center" }}>
              <iframe
                width="350"
                height="200"
                src="https://www.youtube.com/embed/X0OB_Yq_5zk"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <p className="font-sm text-center">
                Existe un error al hacer la conexión, Proveedor de
                canalizaciones, No se pudo abrir la conexión, código duro 58.
              </p>
            </Components.Column>
          </Components.FlexCenterChild>
        </Components.Column>
      </Components.FlexContainer>
      <hr />
      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Acceso al sistema
      </h4>
      <Components.FlexCenterChild>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/zNdKpBYfTpU"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="font-sm">
            Eliminar la contraseña del usuario SUP por olvido
          </p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/QG_J_nBnxbg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Deshabilitar el botón &quot;Usuario por defecto&quot;
          </p>
        </Components.Column>
      </Components.FlexCenterChild>
      <hr />
      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Punto de Venta
      </h4>
      <Components.FlexContainer>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/UPYM_iRZbmg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Cómo colocar y cambiar el logo del ticket
          </p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/Pc0EcJpKXFU"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Mostrar gramos exactos en la impresión del Ticket
          </p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/ZW7MkyRe9Bw"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Cómo cambiar el tamaño de la letra del Ticket
          </p>
        </Components.Column>
      </Components.FlexContainer>

      <hr />

      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Inventarios
      </h4>

      <Components.FlexContainer>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/sXooDBfhuQk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Colocar a un artículo 2 impuestos IEPS e IVA
          </p>
        </Components.Column>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/K2zIiuDDw8o"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Borrar las existencias y dejar todo en cero
          </p>
        </Components.Column>
      </Components.FlexContainer>
      <hr />
      <h4 className="unmargin-top text-center" style={{ marginBottom: "2rem" }}>
        Business Manager
      </h4>
      <Components.FlexCenterChild style={{ marginBottom: "3rem" }}>
        <Components.Column padded>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/2Fzg8-Swn64"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="text-center font-sm">
            Cómo ubicar el Business Manager en la version 2012.
          </p>
        </Components.Column>
      </Components.FlexCenterChild>
    </Components.Container>
  </Layout>
);

export default IndexPage;
