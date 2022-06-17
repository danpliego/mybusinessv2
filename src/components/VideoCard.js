import React from "react";
import { string } from "prop-types";
import * as Comp from "../components/layoutComponents";
import styled from "styled-components";

const VideoCard = ({ title, image, link }) => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <ProductColumnContainer onClick={() => setShowVideo(!showVideo)}>
      <ImageContainer>
        {showVideo ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${link}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        ) : (
          <>
            <img
              src={image}
              style={{ marginBottom: "1rem", display: "block" }}
            />
            <div style={{ padding: "0 12px 12px" }}>
              <Comp.ButtonSecondary small>{title}</Comp.ButtonSecondary>
            </div>
          </>
        )}
      </ImageContainer>
    </ProductColumnContainer>
  );
};

VideoCard.propTypes = {
  title: string,
  description: string,
  link: string,
  image: string,
};

export default VideoCard;

export const ProductColumnContainer = styled.div`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;

  iframe {
    width: 100%;
    height: 300px;
  }

  &:hover {
    transform: scale(1.02);

    img {
      opacity: 0.8;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;

  a {
    pointer-events: none;
  }
`;
