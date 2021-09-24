// Import Styled Components
import styled, { css } from "styled-components";

//Import Styled Breakpoint
import { down } from "styled-breakpoints";

export const HomeContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  overflow-x: hidden;
`;
export const HomeWrapper = styled.div`
  width: 90vw;
  min-height: 30vh;
  margin: 0px auto;
  position: relative;
`;

export const HomeHeadrer = styled.div`
  width: 90vw;
  margin: 40px auto;
`;

export const HomeTitle = styled.h2`
  color: ${(props) => props.theme.white};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  ${down("sm")} {
    margin-left: 15px;
    font-size: 14px;
  }
  ${(props) =>
    props.thin &&
    css`
      color: ${(props) => props.theme.white};
      text-align: left;
      margin-top: -10px;
      font-size: 14px;
      margin-bottom: -20px;
      font-weight: 600;
      opacity: 0.8;
      ${down("sm")} {
        margin-left: 15px;
        font-size: 12px;
      }
    `}
`;

export const HomeSubTitle = styled.p`
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.white};
  opacity: 0.6;
  ${down("sm")} {
    margin-left: 15px;
    font-size: 14px;
  }
`;

export const LogOut = styled.div`
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 40px;
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.white};
  }
  ${down("sm")} {
    width: 30px;
    height: 30px;
    right: 40px;
  }
`;
