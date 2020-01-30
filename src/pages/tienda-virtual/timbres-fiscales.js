// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";

import * as Components from "../../components/layoutComponents";

import HeroImage from "../../images/facturacion/hero-image.jpg";
import PayU from "../../images/mybusiness/pagospayu.png";
import SectionTitle from "../../components/sectionTitle";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tienda Virtual"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Tienda Virtual: Timbres Fiscales" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <Components.Width75 style={{ padding: "3rem" }}>
          <strong>La licencia de MyCFDI 3.3 tiene un costo de $2,320.00 I.V.A. incluido y aplica para licencias nuevas o anteriores.</strong>

<ul className="list-unstyled icon-list">
  <li>
    <i className="fas fa-long-arrow-alt-right margin-lv2-right"></i>
    Los precios ya incluyen IVA y están expresados en pesos Mexicanos.
  </li>
  <li>
    <i className="fas fa-long-arrow-alt-right margin-lv2-right"></i>
    Después de hacer el pago, recibirás un correo confirmandote la transferencia de tus timbres.
  </li>
  <li>
    <i className="fas fa-long-arrow-alt-right margin-lv2-right"></i>
    Es necesario capturar el RFC al que se hará la transferencia de los timbres.
  </li>
</ul>
<table className="table table-bordered">
  <tr>
    <th>Volumen de timbres comprados</th>
    <th>Precio</th>
    <th>Total</th>
  </tr>
  <tr>
    <td><h4>Paquete de 100</h4></td>
    <td>
      <h4>$465.16<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="WXEVKHEMYMPZG" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form> 

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_101" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 200</h4></td>
    <td>
      <h4>$814.32<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="XJGSPHZTL9EKW" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_200" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 500</h4></td>
    <td>
      <h4>$1,745.80<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="GM8JEKEWPH7XU" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_500" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 1,000</h4></td>
    <td>
      <h4>$2,911.60<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="EH9YF23EUZN46" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_1000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 5,000</h4></td>
    <td>
      <h4>$11,658.00<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="NEDLSEQAUQZAG" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_5000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 10,000</h4></td>
    <td>
      <h4>$20,996.00<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="5WJYYRS9CKBCL" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_10000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 20,000</h4></td>
    <td>
      <h4>$38,512.00<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="AHU89Z3UEA8XS" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_20000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 50,000</h4></td>
    <td>
      <h4>$81,780.00<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="5AVFDYNEGKYQA" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />&nbsp;</form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_50000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
  <tr>
    <td><h4>Paquete de 100,000</h4></td>
    <td>
      <h4>$128,760.00<span className="font-size-xs body-xl-color">MXN</span></h4>
    </td>
    <td className="text-center">
      <strong>Paypal</strong>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new" className="form-horizontal">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="N5SMSCSEXJHLW" />
      <div className="form-group">
        <label className="col-sm-5 control-label">RFC</label>
        <div className="col-sm-7">
          <input type="text" className="form-control" name="os0" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-5 control-label">Confirma tu RFC</label>
        <div className="col-sm-7">
          <input type="text" name="os1" className="form-control" />
        </div>
      </div>
      <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." /></form>

      <hr />
      <strong>PayU</strong>
      <div className="padding-lv2-ver">
        <img width="83" height="35" src={PayU} />
      </div>
      <a href="https://compraspayu.mybusinesspos.net/?articulo=Timbre_100000" className="btn btn-sm btn-primary">Comprar Ahora</a>&nbsp;<br />
    </td>
  </tr>
</table>



          </Components.Width75>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
