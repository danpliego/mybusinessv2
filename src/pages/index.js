import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row>
          <HeroContent>
            <h1>La forma simple de administrar tu negocio. </h1>
            <p className="body-l">
              MyBusiness POS es el sistema de punto de venta que hará tu vida
              más sencilla gracias a su facilidad de uso, su gran precio y su
              experiencia en el mercado.
            </p>
          </HeroContent>
          <Comp.Column flex={1}>image here</Comp.Column>
        </Comp.Row>
      </Hero>
      <Comp.Row>
        <Comp.Column>
          <Comp.ButtonPrimary>Pruebalo gratis</Comp.ButtonPrimary>
          <Comp.ButtonPrimary>¿Cómo funciona?</Comp.ButtonPrimary>
        </Comp.Column>
      </Comp.Row>
    </Comp.Container>
    <BlueArea>
      <Comp.Container>
        <Comp.Row>
          <Comp.Column flex={1}>
            <h4>
              <Link to="/corporativos">Corporativos</Link>
            </h4>
            <p className="body-l">
              Lleva un control total de las operaciones monetarias en tu
              negocio.
            </p>
            <Comp.ButtonPrimary to="corporativos">
              Cónoce más...
            </Comp.ButtonPrimary>
          </Comp.Column>
          <Comp.Column flex={1}>
            <h4>
              <Link to="/corporativos">Corporativos</Link>
            </h4>
            <p className="body-l">
              Lleva un control total de las operaciones monetarias en tu
              negocio.
            </p>
            <Comp.ButtonPrimary to="corporativos">
              Cónoce más...
            </Comp.ButtonPrimary>
          </Comp.Column>
          <Comp.Column flex={1}>
            <h4>
              <Link to="/corporativos">Corporativos</Link>
            </h4>
            <p className="body-l">
              Lleva un control total de las operaciones monetarias en tu
              negocio.
            </p>
            <Comp.ButtonPrimary to="corporativos">
              Cónoce más...
            </Comp.ButtonPrimary>
          </Comp.Column>
          <Comp.Column flex={1}>
            <h4>
              <Link to="/corporativos">Corporativos</Link>
            </h4>
            <p className="body-l">
              Lleva un control total de las operaciones monetarias en tu
              negocio.
            </p>
            <Comp.ButtonPrimary to="corporativos">
              Cónoce más...
            </Comp.ButtonPrimary>
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </BlueArea>
  </Layout>
);

export default IndexPage;

export const Test = styled.div`
  border: 10px solid red;
`;

export const Hero = styled.div``;

export const HeroContent = styled(Comp.Column)`
  width: 41.5%;
`;

export const BlueArea = styled.div`
  background: #eee;
`;
