import React from "react";
import { string } from "prop-types";
import { theme } from "./theme";
import * as Comp from "../components/layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

const ProductColumn = ({
  image,
  title,
  description,
  link,
  buttonText,
  buttonSecondaryText
}) => (
  <Comp.Column flex={1} padded>
    <ProductColumnContainer>
      <Link to={link}>
        <img src={image} alt={link} />
      </Link>
      <h6>
        <Link to={link} style={{ color: theme.colors.bodyColor }}>
          {title}
        </Link>
      </h6>
      <p className="body-l font-xs">{description}</p>
      <Comp.ButtonSecondary small to={link}>
        {buttonText}
      </Comp.ButtonSecondary>
      {buttonSecondaryText && (
        <Comp.ButtonSecondary small to={link} style={{ marginLeft: "0.66rem" }}>
          {buttonSecondaryText}
        </Comp.ButtonSecondary>
      )}
    </ProductColumnContainer>
  </Comp.Column>
);

ProductColumn.propTypes = {
  title: string,
  description: string,
  link: string,
  image: string,
  buttonText: string,
  buttonSecondaryText: string || null
};

export default ProductColumn;

export const ProductColumnContainer = styled.div`
  padding-bottom: 3rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
