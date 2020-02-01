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
      title="Cursos Virtuales con Certificación"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Cursos Virtuales con Certificación" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <div style={{ padding: "2rem" }}>
            <h4 style={{ margin: "2rem 0 1rem" }}>
              Curso de Certificación Nivel operativo
            </h4>
            <Components.TableResponsive>
              <table>
                <tr>
                  <th>Dirigido a</th>
                  <th>Descripción</th>
                  <th>Duración</th>
                  <th>Costo</th>
                </tr>

                <tr>
                  <td width="20%">Distribuidores</td>
                  <td>
                    Conocerás todos los módulos del sistema MyBusiness POS para
                    poder implementarlos en cualquier giro de negocio. En su
                    operación más avanzada.
                  </td>
                  <td>10 HRS: 5 Sesiones de 2 HRS</td>
                  <td>
                    <h6>$800 Pesos</h6>
                    <br />
                    <strong>Paypal</strong>
                    <br />
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="YUTKUT2EXFSBC"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                      <img
                        alt=""
                        border="0"
                        src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
                        width="1"
                        height="1"
                      />
                    </form>
                    <strong>PAYU</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <a
                        href="https://compraspayu.mybusinesspos.net/?articulo=CO003"
                        className="art-button"
                      >
                        Comprar Ahora
                      </a>
                      <img
                        width="83"
                        height="35"
                        alt=""
                        className="art-lightbox"
                        src="/images/productos/mybusiness/pagospayu.png"
                      />
                    </form>
                  </td>
                </tr>
              </table>
            </Components.TableResponsive>

            <h4 style={{ margin: "2rem 0" }}>Curso de Programador básico</h4>
            <Components.TableResponsive>
              <table>
                <tr>
                  <th>Dirigido a</th>
                  <th>Descripción</th>
                  <th>Duración</th>
                  <th>Costo</th>
                </tr>

                <tr>
                  <td width="20%">Clientes Finales y Distribuidores.</td>
                  <td>
                    Conocerás el módulo de programación así como todas las
                    herramientas con las que cuenta MyBusiness POS para cambiar
                    su operación.
                  </td>
                  <td>8 HRS: 4 Sesiones de 2 HRS</td>
                  <td>
                    <h6>$800 Pesos</h6>
                    <br />
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="JCGEEU3RCDNW2"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                      <img
                        alt=""
                        border="0"
                        src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
                        width="1"
                        height="1"
                      />
                    </form>
                    <strong>PAYU</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <a
                        href="https://compraspayu.mybusinesspos.net/?articulo=CO004"
                        className="art-button"
                      >
                        Comprar Ahora
                      </a>
                      <img
                        width="83"
                        height="35"
                        alt=""
                        className="art-lightbox"
                        src="/images/productos/mybusiness/pagospayu.png"
                      />
                    </form>
                  </td>
                </tr>
              </table>
            </Components.TableResponsive>

            <h4 style={{ margin: "2rem 0" }}>
              Curso de Certificación de Programador
            </h4>
            <Components.TableResponsive>
              <table>
                <tr>
                  <th>Dirigido a</th>
                  <th>Descripción</th>
                  <th>Requisitos</th>
                  <th>Duración</th>
                  <th>Costo</th>
                </tr>

                <tr>
                  <td width="20%">Clientes Finales y Distribuidores.</td>
                  <td>
                    Te certificarás para poder implementar cualquier
                    requerimiento que el cliente te solicite en nuestro sistema
                    MyBusiness POS.
                  </td>
                  <td>Haber tomado el curso de programador básico.</td>
                  <td>10 HRS: 5 sesiones de 2 HRS</td>
                  <td>
                    <h6>$1,000 Pesos</h6>
                    <br />
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="W5D77G87AKQXY"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                      <img
                        alt=""
                        border="0"
                        src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
                        width="1"
                        height="1"
                      />
                    </form>
                    <strong>PAYU</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <a
                        href="https://compraspayu.mybusinesspos.net/?articulo=CO005"
                        className="art-button"
                      >
                        Comprar Ahora
                      </a>
                      <img
                        width="83"
                        height="35"
                        alt=""
                        className="art-lightbox"
                        src="/images/productos/mybusiness/pagospayu.png"
                      />
                    </form>
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
