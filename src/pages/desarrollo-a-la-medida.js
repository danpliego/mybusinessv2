// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      tae here
    </Comp.Container>
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
