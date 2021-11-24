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
`;

export const LoginForm = styled.form`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  width: 500px;
  height: 300px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.red};
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
    width: 85%;
    position: relative;
    outline: none;
    ::placeholder {
      text-transform: lowercase;
    }
  }
  button {
    margin-top: 30px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.linkFont};
  font-size: 12px;
  letter-spacing: 1.4px;
  margin-bottom: 35px;
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${down("md")} {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  ${down("sm")} {
    width: 50px;
    height: 50px;
  }
`;
