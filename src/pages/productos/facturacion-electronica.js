// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import * as Comp from "../../components/layoutComponents";
import SEO from "../../components/seo";
import styled from "styled-components";
import { BannerContainer } from "../index";
import { BannerContent } from "../index";
import { BlueArea } from "../index";

import HeroImage from "../../images/mybusiness-hero.png";
import Circle1 from "../../images/circle-1.png";
import Circle2 from "../../images/circle-2.png";
import MyForm from "../../components/download_form";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BannerContainer>
      <img src={HeroImage} />
      <BannerContent>
        <h1 className="extended-medium">Facturación electronica</h1>
      </BannerContent>
    </BannerContainer>
    <Comp.Container>
      <Comp.Width75 style={{ textAlign: "center", paddingBottom: "0" }}>
        <h1 className="extended">
          Llevar un control total de tu negocio ahora es más sencillo.
        </h1>
        <p className="body-l">En el sistema encontrarás módulos como:</p>
      </Comp.Width75>
    </Comp.Container>
    <ProductBlueArea>
      <Comp.Container>
        <Comp.FlexCenterChild>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended">Ventas</p>
              <p className="extended">Compras</p>
              <p className="extended">Control de inventario</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle2} />
            <div>
              <p className="extended">Clientes</p>
              <p className="extended">Cuentas por cobrar</p>
              <p className="extended">Cuentas por pagar</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle1} />
            <div>
              <p className="extended">Facturación electronica</p>
              <p className="extended">Pago de servicios</p>
              <p className="extended">Proveedores</p>
            </div>
          </CircleContainer>
          <CircleContainer>
            <img src={Circle2} />
            <div>
              <p className="extended">Programación</p>
              <p className="extended">Venta de recargas electrónicas</p>
              <p className="extended">y más...</p>
              <span className="body-l font-sm">
                *(se adapta a tu giro de negocio)
              </span>
            </div>
          </CircleContainer>
        </Comp.FlexCenterChild>
        <Comp.Width75>
          <h2 className="extended text-center">Características</h2>
          <ul className="font-xl">
            <li>Licencia por máquina.</li>
            <li>La licencia solo se paga una vez.</li>
            <li>
              Se puede instalar a partir de Windows 7 service pack 1 hasta
              Windows 10.
            </li>
            <li>
              Puedes cambiar a la versión más reciente pagando una
              actualización.
            </li>
          </ul>
        </Comp.Width75>
        <Comp.Width50>
          <h2 className="extended text-center">Descarga la prueba grátis</h2>
          <MyForm />
        </Comp.Width50>
      </Comp.Container>
    </ProductBlueArea>
    <BannerContainer>
      <img src={HeroImage} />
      <BannerContent>
        <h1 className="extended-medium">
          Suscríbete a nuestro boletín y recibe promociones, tips para tu
          negocio e información especial.
        </h1>
        <p>subscribe to bulletin</p>
      </BannerContent>
    </BannerContainer>
  </Layout>
);

export default IndexPage;

export const ProductBlueArea = styled(BlueArea)`
  margin-top: 10rem;

  > div {
    margin-top: -10rem;
  }
`;

export const CircleContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 4rem;
  position: relative;

  > div {
    position: absolute;
    z-index: 1;
    top: 0;
    text-align: center;
    left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
  }

  span {
    position: absolute;
    bottom: -3rem;
  }
`;
