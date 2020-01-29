import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      contacto
    </Comp.Container>
  </Layout>
);

export default IndexPage;
