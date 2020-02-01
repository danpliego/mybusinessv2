// eslint-disable-next-line
import React from "react";
import Layout from "../components/layout";
import SectionTitle from "../components/sectionTitle";
import * as Components from "../components/layoutComponents";

import HeroImage from "../images/home/banner-image.png";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Aviso de Privacidad"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Aviso de Privacidad" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ fontSize: ".9rem" }}>
            <p>
              Aviso dirigido a los titulares de datos personales que obran en
              posesión de MyBusiness POS Desarrollos, S.A. de C.V.:
            </p>
            <p>
              MyBusiness POS Desarrollos, S.A. de C.V. en lo sucesivo
              (MyBusiness POS), hace de su conocimiento que los datos personales
              de usted, incluyendo los sensibles, que actualmente o en el futuro
              obren en nuestras bases de datos, serán tratados y/o utilizados
              por: MyBusiness POS y/o aquellos terceros que, por la naturaleza
              de sus trabajos o funciones tengan la necesidad de tratar y/o
              utilizar sus datos personales; con el propósito de cumplir
              aquellas obligaciones que se puedan derivar de la relación
              existente entre usted como titular de los datos personales y las
              empresas antes señaladas.
            </p>
            <p>
              MyBusiness POS, no transferirá los datos personales que obren en
              sus bases de datos a terceras personas, nacionales o extranjeras,
              en términos de lo dispuesto por la Ley Federal de Protección de
              Datos Personales en Posesión de los Particulares, en lo sucesivo
              (la Ley).
            </p>
            <p>
              Los titulares podrán ejercer los derechos que les confiere la Ley,
              a partir del 6 de enero de 2012, mediante una solicitud por
              escrito, que deberá ser enviada mediante correo electrónico, a la
              siguiente dirección de correo electrónico:
              privacidad@mybusinesspos.com. Todas las solicitudes que sean
              presentadas a MyBusiness POS, independiente del medio utilizado
              por los titulares, deberán:
            </p>
            <ul>
              <li>
                Incluir el nombre y firma autógrafa del titular, así como un
                domicilio u otro medio para comunicarle la respuesta a su
                solicitud.
              </li>
              <li>
                Acompañar los documentos oficiales que acrediten la identidad
                del titular.
              </li>
              <li>
                Incluir una descripción clara y precisa de los datos personales
                respecto de los cuales ejercitará los derechos que les confiere
                la Ley.
              </li>
              <li>
                Incluir cualquier elemento o documento que facilite la
                localización de los datos personales de que se traten.
              </li>
              <li>
                MyBusiness POS se reserva el derecho de cambiar, modificar,
                complementar y/o alterar el presente aviso, en cualquier
                momento, en cuyo caso se hará de su conocimiento a través de
                cualquiera de los medios que establece la legislación en la
                materia.
              </li>
            </ul>
            <p>Avisos Legales:</p>
            <p>
              MyBusiness POS no es responsable por la exactitud de la
              información aquí contenida, así como por los errores u omisiones
              que pudieran ocurrir en este sitio.
            </p>
            <p>
              Todos los productos y servicios citados en esta página cuentan con
              los registros necesarios, y es parte de la política de MyBusiness
              POS cumplir y hacer cumplir a cualquier usuario de este sitio el
              respeto a tales registros.
            </p>
            <p>
              Los autores del contenido e información de este sitio, así como el
              diseño, fotografías e imágenes, entre otros, se han reservado su
              uso exclusivo, protegiéndolos de acuerdo a las leyes mexicanas
              vigentes, por lo que su reproducción, copia, alteración,
              modificación o cualquier uso sin el permiso adecuado por escrito
              de MyBusiness POS, está prohibido y constituye un delito. El hacer
              caso omiso a esta notificación, concede a MyBusiness POS tomar las
              medidas pertinentes.
            </p>
            <p>
              Los datos personales registrados y disponibles para MyBusiness POS
              con su visita a este sitio, solamente serán procesados de acuerdo
              con las instrucciones de consulta estipuladas en el Aviso de
              Privacidad.
            </p>
            <p>
              En caso de que al consultar este sitio usted sea remitido a
              páginas que no sean de MyBusiness POS, queda establecido que no
              existe responsabilidad legal alguna para MyBusiness POS en este
              caso, ya que el propósito de ello es únicamente ampliar ciertos
              temas de su interés.
            </p>
            <p>
              MyBusiness POS tomara las medidas necesarias para proteger la
              información ingresada a este sitio, su información será usada con
              fines estadísticos.
            </p>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
