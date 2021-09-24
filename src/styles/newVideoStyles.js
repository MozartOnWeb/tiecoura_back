// Import Styled Components
import styled from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const VideoForm = styled.div`
  bottom: 5%;
  width: 300px;
  ${down("sm")} {
    width: 100%;
  }

  input {
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.white};
    background: rgba(255, 255, 255, 0.03);
    width: 100%;
    position: relative;
    outline: none;
  }

  input[type="file"] {
    font-size: 14px;
  }
  button {
    margin-top: 10px;
    font-size: 12px;
  }

  div {
    height: 5px;
    background: ${(props) => props.theme.white};
    margin-top: 5px;
    width: 0%;
  }
`;
