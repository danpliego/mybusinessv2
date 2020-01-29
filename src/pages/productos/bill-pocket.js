// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";
import { BlueArea } from "../index";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    bill pocket
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
