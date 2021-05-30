// Import Styled Components
import styled from "styled-components";

// Import Styled Breakpoint
import { down } from "styled-breakpoints";

export const LoginWrapper = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  width: 550px;
  height: 300px;
  border-radius: 15px;
`;
