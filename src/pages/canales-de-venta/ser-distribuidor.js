import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/soporte/hero-image.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ser Distribuidor"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Ser Distribuidor" />
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.Container>
        <Comp.BannerBox>
          <Comp.Width75>
            <h4>Para vender</h4>
            <p>
              Para poder vender nuestros productos lo único que usted requiere
              es darse de alta como distribuidor (reseller) con cualquiera de
              nuestros MAYORISTAS.
            </p>
            <p>
              Usted, como distribuidor de nuestros mayoristas, tiene derecho a:
            </p>
            <ol>
              <li>
                Licenciamiento gratuito de por vida de nuestro software para uso
                interno y demostrativo; solicítelo a{" "}
                <a href="mailto:Distribuidores@MyBusinessPOS.com">
                  Distribuidores@MyBusinessPOS.com
                </a>{" "}
                en la compra de sus primeras licencias.
              </li>
              Curso de Usuario Básico MyBusiness POS para distribuidores (1 día,
              curso presencial, costo simbólico).
              <li>WEBINARS SIN COSTO. Cheque el CALENDARIO.</li>
            </ol>
            <strong>
              Para poder ser un mejor vendedor de MyBusiness POS es deseable el
              siguiente curso:
            </strong>
            <div className="well margin-lv3-ver">
              <h6>CERTIFICACION MYBUSINESS POS NIVEL OPERATIVO</h6>

              <p>
                (3 días, requiere tomar CURSO DE USUARIO BASICO MYBUSINESS POS).
                Con esto usted se convierte en un DISTRIBUIDOR CERTIFICADO
                MYBUSINESS POS NIVEL OPERATIVO y comenzamos a referenciarlo a
                través de nuestra página.
              </p>

              <p>
                Hacemos énfasis en que MyBusiness POS Desarrollos, S. A. de C.
                V. no vende de manera directa a usuarios finales ni a
                distribuidores (resellers).
              </p>
            </div>

            <hr />

            <h4>Para implantar</h4>
            <strong>
              Para poder implantar el producto se requieren los siguientes
              cursos:
            </strong>

            <div className="well margin-lv3-ver">
              <h6>CERTIFICACION MYBUSINESS POS NIVEL OPERATIVO</h6>

              <p>
                (3 días, requiere tomar CURSO DE USUARIO BASICO MYBUSINESS POS).
              </p>

              <p>
                Con esto usted se convierte en un DISTRIBUIDOR CERTIFICADO
                MYBUSINESS POS NIVEL OPERATIVO y comenzamos a referenciarlo a
                través de nuestra página. Cheque el CALENDARIO.
              </p>

              <p>
                El siguiente curso es obligatorio cuando no se domina la
                programación en Visual Basic a nivel scripting y lenguaje de
                acceso a base de datos SQL:
              </p>

              <p>
                CURSO DE PROGRAMADOR BASICO MYBUSINESS POS (2 días, requiere
                tomar CURSO DE USUARIO BASICO MYBUSINESS POS o CERTIFICACION
                MYBUSINESS POS NIVEL OPERATIVO). Cheque el CALENDARIO.
              </p>
            </div>

            <div className="well margin-lv3-ver">
              <h6>CERTIFICACION MYBUSINESS POS NIVEL PROGRAMADOR</h6>
              <p>
                (3 días, requiere CURSO DE PROGRAMADOR BASICO MYBUSINESS POS o
                demostrar, mediante examen, dominio en programación en Visual
                Basic a nivel scripting y lenguaje de acceso a bases de datos
                SQL).
              </p>

              <p>
                Con esto usted se convierte en un DISTRIBUIDOR CERTIFICADO
                MYBUSINESS POS NIVEL USUARIO Y NIVEL PROGRAMADOR y comenzamos a
                referenciarlo a través de nuestra página. Cheque el CALENDARIO.
              </p>
              <p>
                Inversión: cheque precios en la liga CALENDARIO. En
                Certificaciones aplica un 50% de descuento de la 2da. persona en
                adelante de la misma empresa
              </p>
            </div>

            <hr />

            <h3 className="margin-lv4-bottom">
              ¿En qué le beneficia ser Distribuidor Certificado MyBusiness POS?
            </h3>

            <h4>1Mayor captación de clientes.</h4>

            <p>
              Después de convertirse en DISTRIBUIDOR CERTIFICADO MYBUSINESS POS
              NIVEL OPERATIVO será dado de alta en nuestra página para que los
              usuarios finales potenciales de su zona de influencia puedan
              contactarlos, asimismo con usuarios que nos localicen por la vía
              telefónica.
            </p>

            <h4>Mayor ingreso por el servicio de implantación.</h4>
            <p>
              El negocio en la implantación a usuario final es, por regla
              general, mucho mayor que la venta del propio software.
            </p>
            <p>
              La adaptabilidad que tiene MyBusiness POS hace que se pueda
              implantar desde comercios pequeños hasta cadenas grandes de punto
              de venta.
            </p>
            <p>
              La finalidad de ser DISTRIBUIDOR CERTIFICADO MYBUSINESS POS NIVEL
              OPERATIVO Y NIVEL PROGRAMADOR es darle al distribuidor los
              elementos para poder hacer todo este tipo de implantaciones,
              generando mayores ingresos.
            </p>

            <hr />
            <div className="text-center padding-lv2-ver">
              <h5>
                Usted puede encontrar fechas, temario de los cursos, requisitos
                y forma para registro en el siguiente calendario
              </h5>
              <div className="padding-lv2-ver">
                <a href="/capacitacion/" className="btn btn-primary">
                  Ver Calendario de Cursos
                </a>
              </div>
            </div>
          </Comp.Width75>
        </Comp.BannerBox>
      </Comp.Container>
    </Comp.BannerContainer>
  </Layout>
);

export default IndexPage;
