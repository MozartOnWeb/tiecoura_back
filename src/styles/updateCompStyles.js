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
    cursor: pointer;
    z-index: 5;
  }

  input[type="file"] {
    font-size: 14px;
  }

  label {
    cursor: pointer;
    position: absolute;
    z-index: 1;
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
  }

  button {
    letter-spacing: 2.5px;
    font-weight: 300;
    font-size: 10px;
    margin-top: 20px;
  }
`;
