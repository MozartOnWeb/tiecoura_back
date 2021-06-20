// Import Styled Components
import styled from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const BioContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  hr {
    width: 90vw;
    margin: 20px auto;
    opacity: 0.4;
  }

  .hr0 {
    width: 90vw;
    margin: 0 auto;
    visibility: hidden;
  }
`;

export const SingleBio = styled.div`
  width: 300px;
  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-size: 14px;
    text-decoration: underline;
  }
  textarea {
    resize: none;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(255, 255, 255, 0.03);
    width: 100%;
    position: relative;
    outline: none;
  }
  button {
    font-size: 12px;
    margin-top: 10px;
  }
`;
