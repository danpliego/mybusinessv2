// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/capacitacion/hero-image.jpg";
import * as Components from "../../components/layoutComponents";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Cursos Virtuales Gratuitos"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Cursos Virtuales Gratuitos" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <div style={{ padding: "2rem" }}>
            <Components.TableResponsive>
              <table>
                <tr>
                  <th>Curso</th>
                  <th colSpan="2">Descripción</th>
                </tr>

                <tr>
                  <td width="20%">
                    <h5 className="unmargin">
                      Implementa MyBusiness POS en tu negocio
                    </h5>
                  </td>
                  <td>
                    Dirigido a todos los nuevos usuarios que acaban de adquirir
                    el sistema y desean saber la correcta implementación de este
                    en su negocio.
                  </td>
                  <td className="reset-padding">
                    <table className="table unmargin">
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/ImplementaMyBusinessPOS/implementamybusinesspos_parte1/ImplementaMyBusinessPOS_Parte1.html"
                          >
                            Sesión 1
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>Conociendo a MyBusiness POS</li>
                            <li>Planeando la implementación</li>
                            <li>Dispositivos de punto de venta compatibles</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/ImplementaMyBusinessPOS/implementamybusinesspos_parte1/ImplementaMyBusinessPOS_Parte2.html"
                          >
                            Sesión 2
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>
                              Instalación y Configuración de MyBusiness POS
                            </li>
                            <li>
                              Importación de los 3 catálogos del sistema:
                              Artículos,Clientes y Proveedores
                            </li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/ImplementaMyBusinessPOS/implementamybusinesspos_parte1/ImplementaMyBusinessPOS_Parte3.html"
                          >
                            Sesión 3
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>Configuración avazada de artículos</li>
                            <li> Manejo del módulo de Ventas</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/ImplementaMyBusinessPOS/implementamybusinesspos_parte1/ImplementaMyBusinessPOS_Parte4.html"
                          >
                            Sesión 4
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>
                              Instalar, configurar y operar el módulo MyCFDI
                              para Factura Electrónica
                            </li>
                            <li>
                              Manejo de Inventarios: Compras, Entradas y
                              Salidas,Inventario Físico
                            </li>
                            <li>Administración: Reportes</li>
                            <li>Respaldar y Restaurar la base de datos</li>
                          </ol>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td width="20%">
                    <h5 className="unmargin">
                      Implementa facturación electrónica en tu negocio
                    </h5>
                  </td>
                  <td width="20%">
                    Dirigido a todos los que deseen aprender como iniciar la
                    implementación de la factura electrónica en cualquier giro
                    de negocio.
                  </td>
                  <td className="reset-padding">
                    <table className="table unmargin">
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/FacturaElectronica/ImplementaLaFactura_Parte1/ImplementaLaFactura_Parte1.html"
                          >
                            Sesión 1
                          </a>
                        </td>
                        <td>Tramite de FIEL y Sello digital.</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/FacturaElectronica/ImplementaLaFactura_Parte1/ImplementaLaFactura_Parte2.html"
                          >
                            Sesión 2
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>
                              Instalación y configuración del módulo MyCFDI.
                            </li>
                            <li>Prueba del módulo en el módulo de ventas.</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/FacturaElectronica/ImplementaLaFactura_Parte1/ImplementaLaFactura_Parte3.html"
                          >
                            Sesión 3
                          </a>
                        </td>
                        <td>
                          <ol>
                            <li>
                              Emitir facturas desde el portal de internet.
                            </li>
                            <li>Creación de Addendas.</li>
                          </ol>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td width="20%">
                    <h5 className="unmargin">
                      Implementa los Servicios en la Nube
                    </h5>
                  </td>
                  <td width="20%">
                    Dirigido a todas las personas que deseen administrar su
                    negocio o cadena de tiendas a través de su celular.
                  </td>
                  <td className="reset-padding">
                    <table className="table unmargin">
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://videos.mybusinesspos.net/ServiciosenlaNube/Configuraci%C3%B3n_de_los_Servicios_en_la_Nube.mp4"
                          >
                            Sesión 1
                          </a>
                        </td>
                        <td>
                          Configuración de los servicios en la nube para
                          MyBusiness POS 2017
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Components.TableResponsive>
          </div>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
