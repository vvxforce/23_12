import * as React from "react";
import { Link } from "react-router-dom";


const CardItem = ({ style, title, img, _id, key }) => {
  const width = Math.min(window.innerWidth * 0.55, 280);

  return (
    <div
      key={key}
      style={{
        width: width,
        height: width * 1.285714285714286,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        color: "#0F4240",
        textAlign: "center",
        border: "4px solid #C2E8F2",
        boxSizing: "border-box",
        borderRadius: "20px",
        paddingBottom: "40px",
        backdropFilter: "blur(10px)",
        boxShadow: "inset 2px 2px 15px rgba(13, 51, 49, .6)",
        ...style
      }}
    >
      <Link to={`/product/${_id}`}>
        <img className= "card-img" src={img} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default CardItem;
