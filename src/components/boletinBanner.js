import React from "react";
import * as Layout from "./layoutComponents";

import BoletinImage from "../images/boletin.jpg";

const BoletinBanner = () => (
  <Layout.BannerContainer>
    <Layout.BannerImage>
      <img src={BoletinImage} />
    </Layout.BannerImage>
    <Layout.BannerContent>
      <h1 className="extended-medium">
        Suscríbete a nuestro boletín y recibe promociones, tips para tu negocio
        e información especial.
      </h1>
      <div style={{ textAlign: "center" }}>
        <iframe
          src="http://mybusinessv2.danielpliego.com/mybusiness-form.html"
          border="0"
          frameBorder="0"
        />
      </div>
    </Layout.BannerContent>
  </Layout.BannerContainer>
);

export default BoletinBanner;
