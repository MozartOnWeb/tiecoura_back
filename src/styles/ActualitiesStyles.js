// Import Styled Components
import styled, { css } from "styled-components";

// Import Styeld Breakpoints
import { down } from "styled-breakpoints";

export const ActualityWrapper = styled.div`
  width: 90vw;
  margin: 30px auto;

  ${down("sm")} {
    margin: 30px auto 10px auto;
    height: 100%;
    margin: 15px auto;
    hr {
      display: block;
      width: 90vw;
      margin: 25px auto;
    }
  }

  .eventSubmit {
    text-align: center;
    margin-bottom: 40px;
    ${down("sm")} {
      margin-bottom: -70px;
    }
  }

  .series_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 50px auto;
    height: 400px;

    ${down("sm")} {
      margin: 0px auto;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
  }

  .desc_container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 75%;
    ${down("sm")} {
      width: 100%;
      margin-top: 80px;
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
      fill: ${(props) => props.theme.white};
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

export const ImageWrapper = styled.div`
  width: 200px;
  height: 168px;
  align-self: start;
  position: relative;
  margin-top: 10px;
  div {
    width: 100%;
    height: 100%;
    margin-top: 15px;
    border-radius: 15px;
    img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ${down("sm")} {
    width: 180px;
    height: 100px;
    margin: 0px auto 40px 30%;
    align-self: center;
    div {
      width: 130px;
      height: 100px;
    }
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
    border-bottom: 1px solid ${(props) => props.theme.white};
    background: rgba(255, 255, 255, 0.03);
    width: 90%;
    position: relative;
    outline: none;
  }
  label {
    margin: 0px;
    p {
      margin: 0px;
      color: ${(props) => props.theme.white};
      opacity: 0.6;
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
    margin-bottom: 75px;
  }

  input {
    opacity: 0;
    z-index: 1;
    width: 50%;
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
        stroke: ${(props) => props.theme.white};
      }
    }

    .svg2 {
      fill: ${(props) => props.theme.white};
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
    background: ${(props) => props.theme.white};
    margin-top: 10px;
    width: 0px;
  }
`;
