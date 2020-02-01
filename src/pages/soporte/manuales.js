// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/soporte/hero-image.jpg";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Manuales" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Manuales" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <Components.TableResponsive>
              <table>
                <tr>
                  <th>Versión</th>
                  <th>Descripción</th>
                  <th>Liga</th>
                </tr>
                <tr>
                  <td>MyBusiness POS 2017</td>
                  <td>Manual del usuario</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/MyBusinessPOS-2017-Manual-del-Usuario.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2017</td>
                  <td>Configuración de servicios en la nube v17</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Configuracion_servicios_en_la_nube_v17.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2017</td>
                  <td>Logo ticket 2017</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Configuracion_servicios_en_la_nube_v17.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2011-2017</td>
                  <td>Actualización Complemento de Pagos CFDI 3.3</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Actualizacion_Complemento_de_Pagos_CFDI33.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>PosTools</td>
                  <td>Manual de usuario PosTools </td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Manual-de-usuario-Postools.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>
                    Importar paquetes de procedimientos, formatos y reportes
                  </td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Importarformatosprocedimientosreportes2008-2012.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Importar formularios a MyBusiness POS</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Importarformulario.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Elimina la clave de un usuario</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/ELIMINAR-CLAVE-DE-USUARIO.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>

                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Realiza el respaldo de la base de datos</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="ttps://www.mybusinesspos.com/downloads/manuales/RESPALDOBDDATOS.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Registra archivos OCX o DLL en Windows</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/RegistrarArchivos(OCX)2008-2012.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>

                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Recupera la base de datos</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Recuperar respaldo de MyBusiness POS 2008-2012.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>

                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Manual para módulo de contabilidad</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Manual-Módulo-de-Contabilidad.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>

                <tr>
                  <td>MyBusiness POS 2008-2012</td>
                  <td>Crea un icono de complemento de pagos</td>
                  <td>
                    <Components.ButtonSecondary
                      small
                      as="a"
                      href="https://www.mybusinesspos.com/downloads/manuales/Icono-complemento-de-pagosV12.pdf"
                    >
                      Descargar
                    </Components.ButtonSecondary>
                  </td>
                </tr>
              </table>
            </Components.TableResponsive>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
