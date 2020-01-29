// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="extended-medium">Facturación electronica</h1>
  </Layout>
);

export default IndexPage;
