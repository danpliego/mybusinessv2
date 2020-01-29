// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <h1>Capacitacion</h1>
    <Link to="/capacitacion/cursos-virtuales-gratuitos">
      Cursos Virtuales Gratuitos
    </Link>
    <Link to="/capacitacion/cursos-virtuales-con-certificacion">
      Cursos Virtuales con certificacion
    </Link>
  </Layout>
);

export default IndexPage;
