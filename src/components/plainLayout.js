import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./layoutComponents";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const PlainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
    </ThemeProvider>
  </>
);

PlainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlainLayout;
