// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <h1>descargas</h1>
    <Link to="/descargas/my-business">mybusiness</Link>
    <Link to="/descargas/facturacion-electronica">Facturación electrónica</Link>
    <Link to="/descargas/tiempo-aire">Tiempo Aire</Link>
  </Layout>
);

export default IndexPage;
