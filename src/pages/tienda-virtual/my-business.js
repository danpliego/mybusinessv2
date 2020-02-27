// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";

import * as Components from "../../components/layoutComponents";

import PayU from "../../images/mybusiness/pagospayu.png";
import SectionTitle from "../../components/sectionTitle";
import SEO from "../../components/seo";

import HeroImage from "../../images/mybusiness/hero-image.jpg";
import Box2017 from "../../images/mybusiness/boxMBP2017.png";
import Box2012 from "../../images/mybusiness/boxMBP2012.jpg";
import Box2011 from "../../images/mybusiness/boxMBP2011.gif";
import Box2010 from "../../images/mybusiness/boxMBP2010.jpg";
import Box208 from "../../images/mybusiness/boxMBP2008.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Tienda Virtual" keywords={[`gatsby`, `application`, `react`]} />
    <SectionTitle name="Tienda Virtual: MyBusiness POS" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75>
            <Components.TableResponsive>
              <table className="table table-bordered">
                <tr>
                  <td></td>
                  <td>
                    <strong>
                      MyBusiness POS V. 20 Software de Punto de Venta y Control
                      Administrativo (3)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 7507945042186
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="GZJLHRS92QFY8"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=7507945042186"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Box2017} width="176" />
                  </td>
                  <td>
                    <strong>
                      MyBusiness POS V. 2017 Software de Punto de Venta y
                      Control Administrativo (2)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 7507945042186
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="GZJLHRS92QFY8"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=7507945042186"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Box2012} width="176" />
                  </td>
                  <td>
                    <strong>
                      MyBusiness POS V. 2012 Software de Punto de Venta y
                      Control Administrativo (1)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 7507362119539
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="PCA8D6N97MB5S"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=7507362119539"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Box2011} width="176" />
                  </td>
                  <td>
                    <strong>
                      MyBusiness POS V. 2011 Software de Punto de Venta y
                      Control Administrativo (1)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 507362115715
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="G694ZN8UU6JYJ"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=7507362115715"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Box2010} width="176" />
                  </td>
                  <td>
                    <strong>
                      MyBusiness POS V. 2010 Software de Punto de Venta y
                      Control Administrativo (1)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 507362115715
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="YE29N7DG2K978"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=7507051056053"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Box208} width="176" />
                  </td>
                  <td>
                    <strong>
                      MyBusiness POS V. 2008 Software de Punto de Venta y
                      Control Administrativo (1)*
                    </strong>
                    <br />
                    <span className="font-size-xs body-xl-color">
                      ID: 507362115715
                    </span>
                  </td>
                  <td>
                    <h6>
                      $2,970
                      <span className="font-size-xs body-xl-color">
                        MXN Netos
                      </span>
                    </h6>
                  </td>
                  <td className="text-center">
                    <strong>Paypal</strong>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="UBRUP9TW4J3CE"
                      />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                      />
                    </form>
                    <hr />
                    <strong>PayU</strong>
                    <div className="padding-lv2-ver">
                      <img width="83" height="35" src={PayU} />
                    </div>
                    <a
                      href="https://compraspayu.mybusinesspos.net/?articulo=MYB2008"
                      className="btn btn-sm btn-primary"
                    >
                      Comprar Ahora
                    </a>
                    &nbsp;
                    <br />
                  </td>
                </tr>
              </table>
            </Components.TableResponsive>

            <div className="text-center">
              <strong>
                En la compra de cualquier licencia usted recibirá un correo
                electrónico que incluye un certificado con el número de serie
                para el registro de su licencia y una liga para generarse su
                factura.
              </strong>
            </div>
            <hr />

            <h4>Notas:</h4>
            <ul className="list-unstyled">
              <li>* Licencia electrónica.</li>
              <li>* El precio de la licencia es por computadora instalada.</li>
              <li>
                <strong>(1)</strong> Compatibles con Windows XP, Windows Vista,
                Windows 7, Windows 8, Windows 8.1
              </li>
              <li>
                <strong>(2)</strong> Compatibles con Windows 7, Windows 8,
                Windows 8.1, Windows 10
              </li>
              <li>
                <strong>(3)</strong>Compatible con Windows 8, Windows 8.1,
                Windows 10
              </li>
            </ul>
          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
