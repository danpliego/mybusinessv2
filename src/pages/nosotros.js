import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Nosotros" keywords={[`gatsby`, `application`, `react`]} />
      nosotros
    </Comp.Container>
  </Layout>
);

export default IndexPage;
