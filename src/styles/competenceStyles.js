// Import Styled Components
import styled from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const CompetenceContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const CompetenceWrapper = styled.div`
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 0px 35px 70px 0px;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 15px;
  position: relative;

  img {
    border-radius: 15px;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
  }

  ${down("sm")} {
    width: 150px;
    margin-bottom: 65px;
    margin-right: 15px;
    height: 180px;
  }
  ${down("s")} {
    width: 150px;
    margin-bottom: 65px;
    margin-right: 20px;
  }
`;