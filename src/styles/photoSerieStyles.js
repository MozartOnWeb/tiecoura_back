// Import Styled Components
import styled, { css } from "styled-components";

// Import Styeld Breakpoints
import { down } from "styled-breakpoints";

export const SingleSerieWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 0px 35px 0px 0px;
  position: relative;
  img {
    margin-top: 15px;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${down("sm")} {
    width: 130px;
    height: 100px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
  ${down("s")} {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const SerieContainer = styled.div`
  width: 90vw;
  margin: 50px auto;
  overflow-x: hidden;
  h3 {
    font-family: ${(props) => props.theme.linkFont};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
  hr {
    display: none;
  }
  .series_container {
    ${down("sm")} {
      margin: 0px auto;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  ${down("sm")} {
    margin: 15px auto;
    hr {
      display: block;
      width: 90vw;
      margin: 25px auto;
    }
  }
`;

export const SerieTitle = styled.h2`
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 18px;
  ${down("s")} {
    font-size: 14px;
  }
  span {
    margin-left: 10px;
    font-size: 22px;
    letter-spacing: 0.8px;
    color: ${(props) => props.theme.white};
    ${down("s")} {
      font-size: 16px;
    }
  }
  ${(props) =>
    props.thin &&
    css`
      font-size: 16px;
      margin-bottom: 20px;
      font-weight: 300;
    `}
`;

export const SerieHeader = styled.div`
  width: 90vw;
  margin: 0px auto;
  display: flex;
  align-items: center;
`;

export const Back = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  ${down("s")} {
    width: 40px;
    height: 40px;
  }
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${(props) => props.theme.white};
    }
  }
`;
