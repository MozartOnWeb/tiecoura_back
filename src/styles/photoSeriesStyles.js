// Import Styled Components
import styled, { css } from "styled-components";

export const SerieWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  text-align: center;
  margin: 0px 35px 0px 0px;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 15px;
  position: relative;

  h3 {
    font-family: ${(props) => props.theme.linkFont};
  }

  a {
    text-decoration: none;
    img {
      border-radius: 15px;
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
    p {
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      margin-top: 25px;
    }
  }
`;

export const SingleSerieWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 0px 35px 0px 0px;
  img {
    margin-top: 15px;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SerieContainer = styled.div`
  width: 90vw;
  margin: 50px auto;
  h3 {
    font-family: ${(props) => props.theme.linkFont};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    span {
      font-size: 14px;
      letter-spacing: 0.8px;
      color: ${(props) => props.theme.red};
    }
  }
`;

export const SerieHeader = styled.div`
  width: 90vw;
  margin: 50px auto;
`;

export const SerieTitle = styled.h2`
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  ${(props) =>
    props.thin &&
    css`
      font-size: 16px;
      margin-bottom: 20px;
      font-weight: 300;
    `}
`;

export const SerieSubTitle = styled.p`
  font-family: ${(props) => props.theme.bodyFont};
`;
