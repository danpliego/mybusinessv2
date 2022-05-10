import React from "react";
import { string } from "prop-types";
// import { theme } from "./theme";
import * as Comp from "../components/layoutComponents";
// import { Link } from "gatsby";
import styled from "styled-components";

const VideoCard = ({ image, link, buttonText }) => {
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
            <img src={image} />
            <Comp.ButtonSecondary small>{buttonText}</Comp.ButtonSecondary>
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
  buttonText: string,
};

export default VideoCard;

export const ProductColumnContainer = styled.div`
  transition: all 0.3s ease-in-out;
  min-width: 33%;
  max-width: 33%;
  cursor: pointer;
  margin-bottom: 1rem;

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
  padding: 1rem;
  position: relative;

  a {
    pointer-events: none;
  }
`;
