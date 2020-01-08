import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import * as Layout from "./layoutComponents";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <Layout.Container>
      <Layout.Row>
        <Layout.Column style={{ border: "10px solid red" }}>
          <Link to="/">logo here</Link>
        </Layout.Column>
        <Layout.Column flex={1}>
          <Menu>
            <MenuItem>
              <Link to="/venta-de-tae">Venta de TAE</Link>
            </MenuItem>
          </Menu>
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`;

export default StyledHeader;

export const Menu = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  padding: 1rem;
`;
