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
    display: none;
  }

  input[type="file"] {
    font-size: 14px;
  }

  label {
    cursor: pointer;
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px auto 5px auto;
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke: ${(props) => props.theme.red};
      }
    }
  }

  button {
    font-size: 10px;
  }
`;
