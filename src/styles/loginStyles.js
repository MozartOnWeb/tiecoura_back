// Import Styled Components
import styled from "styled-components";

// Import Styled Breakpoint
import { down } from "styled-breakpoints";

export const LoginWrapper = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.black};
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .toast_container {
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.red};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const LoginForm = styled.form`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  width: 550px;
  height: 300px;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${down("sm")} {
    width: 350px;
    height: 300px;
  }
  ${down("s")} {
    width: 280px;
    height: 300px;
  }
  input {
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.black};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(0, 0, 0, 0.04);
    width: 90%;
    position: relative;
    outline: none;
    ::placeholder {
      text-transform: lowercase;
    }
  }
  button {
    margin-top: 30px;
    font-size: 14px;
  }
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.linkFont};
  font-size: 14px;
  letter-spacing: 1.4px;
  margin-bottom: 35px;
`;
