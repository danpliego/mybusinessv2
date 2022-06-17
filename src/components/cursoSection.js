import { any, string } from "prop-types";
import React from "react";
import styled from "styled-components";
import { theme } from "./theme";
import VideoCard from "./VideoCard";

const CursoSection = ({ title, videos }) => (
  <div style={{ padding: "1rem" }}>
    <CursoMenuTitle to="/soporte/video-tutoriales">{title}</CursoMenuTitle>
    <div>
      {videos.map((video, i) => (
        <CursoVideo key={i}>
          <VideoCard
            title={video.title}
            link={video.link}
            image={video.image}
          />
        </CursoVideo>
      ))}
    </div>
  </div>
);

CursoSection.propTypes = {
  title: string,
  videos: any,
};

export default CursoSection;

const CursoMenuTitle = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dbe4ea;
  color: ${theme.colors.bodyColor};
  min-height: 70px;

  @media ${theme.breakpoint.upFromMobile} {
    border-right: 1px solid #dbe4ea;

    &:last-child {
      border-right: 0;
    }
  }

  &:hover {
    background: #f4f4f4;
  }
`;

const CursoVideo = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  display: block;
  margin-bottom: 1rem;
`;
