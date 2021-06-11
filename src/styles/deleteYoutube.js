import styled from "styled-components";

export const DeleteButton = styled.button`
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  bottom: -50%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
