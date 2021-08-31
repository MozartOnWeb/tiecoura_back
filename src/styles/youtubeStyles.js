// Import Styled Components
import styled from "styled-components";

// Import styled Breakpoints
import { down } from "styled-breakpoints";

export const VideoContainer = styled.div`
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

export const VideoWrapper = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;
  margin: 0px 35px 70px 0px;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 15px;
  position: relative;
  ${down("sm")} {
    width: 135px;
    margin-bottom: 65px;
    margin-right: 15px;
  }
  ${down("s")} {
    width: 120px;
    margin-bottom: 65px;
    margin-right: 20px;
  }

  video,
  iframe {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    margin-top: 50px;
  }
`;
