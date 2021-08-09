import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiRightArrowCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#E2293F",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiLeftArrowCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#E2293F",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
};
export const NextArrow2 = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiRightArrowCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#E2293F",
        width: "35px",
        height: "35px",
        marginRight: "-15px",
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow2 = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiLeftArrowCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#E2293F",
        width: "35px",
        height: "35px",
        marginLeft: "-15px"
      }}
      onClick={onClick}
    />
  );
};
