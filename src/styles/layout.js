import styled, { css } from "styled-components";

export const Submit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  color: ${(props) => props.theme.red};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.5px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      fill: ${(props) => props.theme.red};
    }
  }

  ${(props) =>
    props.center &&
    css`
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 22px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}

  ${(props) =>
    props.new &&
    css`
      margin-bottom: 30px;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.red};
  }
`;
