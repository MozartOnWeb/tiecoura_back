import styled from "styled-components"

export const Delete = styled.button`
  width: 30px;
  border: 1px solid ${(props) => props.theme.red};
  font-family: "Poppins";
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  padding: 5px 10px;
  background: transparent;
  color: ${(props) => props.theme.black};
  border-radius: 15px;
  position: absolute;
  top: 20px;
  right: 5px;
  background: ${(props) => props.theme.red};
  cursor: pointer;
`;

export const DeleteBGS = styled.button`
  width: 30px;
  border: 1px solid ${(props) => props.theme.red};
  font-family: "Poppins";
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  padding: 5px 10px;
  background: transparent;
  color: ${(props) => props.theme.black};
  border-radius: 15px;
  position: absolute;
  top: 5px;
  right: 5px;
  background: ${(props) => props.theme.red};
  cursor: pointer;
`;

