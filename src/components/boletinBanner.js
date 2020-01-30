import React from "react";
import * as Layout from "./layoutComponents";

import BoletinImage from "../images/home/banner-image.png";

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
      <p>subscribe to bulletin</p>
    </Layout.BannerContent>
  </Layout.BannerContainer>
);

export default BoletinBanner;
