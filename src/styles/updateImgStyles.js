// Import Styled Components
import styled from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const UpdateForm = styled.div`
  top: 70%;
  width: 100%;
  position: absolute;

  ${down("sm")} {
    width: 100%;
    position: absolute;
    margin-bottom: 25px;
  }

  input {
    opacity: 0;
    z-index: 1;
  }

  input[type="file"] {
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
  }

  label {
    cursor: pointer;
    position: absolute;
    z-index: -1;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 10px;
    transform: translate(-50%);
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke: ${(props) => props.theme.red};
      }
    }

    .svg2 {
      fill: ${(props) => props.theme.red};
      width: 24px;
      height: 24px;
    }
  }

  button {
    letter-spacing: 2.5px;
    font-weight: 300;
    font-size: 10px;
    margin-top: 5px;
  }

  div {
    height: 3px;
    background: ${(props) => props.theme.red};
    margin-top: 10px;
    width: 0px;
  }
`;
