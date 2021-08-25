// Import Styled Components
import styled, { css } from "styled-components";

// Import Styeld Breakpoints
import { down } from "styled-breakpoints";

export const ActualityWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 30px auto;
  overflow: hidden;
  hr {
    display: none;
  }

  .eventSubmit {
    text-align: center;
    margin-bottom: 40px;
  }

  .series_container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px auto;
    height: 400px;

    ${down("sm")} {
      margin: 0 auto;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${down("sm")} {
    hr {
      display: block;
      width: 90vw;
      margin: 25px auto;
    }
  }
`;

export const ActualityHeader = styled.div`
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
      fill: ${(props) => props.theme.red};
    }
  }
`;

export const ActualityTitle = styled.h2`
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
    color: ${(props) => props.theme.red};
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

export const ImageWrapper = styled.div`
  width: 200px;
  height: 168px;
  align-self: start;
  position: relative;
  margin-top: 10px;
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
  }
  ${down("s")} {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const ActyalityDesc = styled.div`
  width: 400px;
  position: relative;
  overflow: hidden;
  ${down("sm")} {
    width: 100%;
  }
  input,
  textarea {
    margin-top: 5px;
    margin-bottom: 20px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(255, 255, 255, 0.03);
    width: 90%;
    position: relative;
    outline: none;
  }
  label {
    margin: 0px;
    p {
      margin: 0px;
      color: ${props => props.theme.white};
      opacity: .6;
      font-size: 12px;
    }
  }
  button {
    margin: 10px;
    font-size: 12px;
    align-self: center;
  }
  textarea {
  resize: none;
}
`;

export const UpdateForm = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  ${down("sm")} {
    width: 100%;
    position: relative;
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
