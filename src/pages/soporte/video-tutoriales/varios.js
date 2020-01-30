// eslint-disable-next-line
import React from "react";

import Layout from "../../../components/layout";
import SectionTitle from "../../../components/sectionTitle";
import * as Components from "../../../components/layoutComponents";
import VideoTutorialsMenu from "../../../components/videoTutorialsMenu";

const IndexPage = () => (
  <Layout>
    <SectionTitle name="Video Tutoriales" subtitle="Varios" />
    <Components.Container>
      <VideoTutorialsMenu />
      <iframe
        src="https://www.mybusinesspos.com/videos.aspx"
        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe>
    </Components.Container>
  </Layout>
);

export default IndexPage;
