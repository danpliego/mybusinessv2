import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column" : "row")};
  }
`;

export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};
`;

const sharedButton = css`
  border: 1px solid;
  padding: 1rem;
  transition: all 0.15s ease-in-out;
  display: inline-block;

  &:hover {
    transform: translate(0px, -2px);
  }
`;

export const ButtonPrimary = styled(Link)`
  ${sharedButton}
  border-color: ${props => props.theme.colors.bodyColor};
  background: ${props => props.theme.colors.bodyColor};
  color: ${props => props.theme.colors.whiteColor};
`;

export const ButtonSecondary = styled.button`
  ${sharedButton}
  color: ${props => props.theme.colors.whiteColor};
`;
