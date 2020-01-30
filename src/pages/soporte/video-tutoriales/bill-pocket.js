// eslint-disable-next-line
import React from "react";

import Layout from "../../../components/layout";
import SectionTitle from "../../../components/sectionTitle";
import * as Components from "../../../components/layoutComponents";
import VideoTutorialsMenu from "../../../components/videoTutorialsMenu";

const IndexPage = () => (
  <Layout>
    <SectionTitle name="Video Tutoriales" subtitle="Bill Pocket" />
    <Components.Container>
      <VideoTutorialsMenu />
      <iframe
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/kIHKrfSM0fc"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Components.Container>
  </Layout>
);

export default IndexPage;
