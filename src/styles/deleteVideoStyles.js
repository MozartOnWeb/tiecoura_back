import styled from "styled-components";

export const DeleteButton = styled.button`
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
`;
