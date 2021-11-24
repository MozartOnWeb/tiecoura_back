// Import Styled Components
import styled, { css } from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const SerieWrapper = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 0px 35px 70px 0px;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 15px;
  position: relative;
  ${down("sm")} {
    width: 135px;
    margin-bottom: 65px;
    margin-right: 15px;
  }
  ${down("s")} {
    width: 120px;
    margin-bottom: 65px;
    margin-right: 20px;
  }
  h3 {
    font-family: ${(props) => props.theme.linkFont};
  }

  a {
    text-decoration: none;

    img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      box-sizing: border-box;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      position: absolute;
      bottom: -55px;
      width: 100%;
      color: ${(props) => props.theme.black};
      font-weight: bold;
      padding: 5px 10px;
      background-color: #f1faee;
      border-radius: 10px;
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
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    width: 85vw;
    margin: 20px auto;
    opacity: 0.1;
  }
  .hr0 {
    width: 90vw;
    visibility: hidden;
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
