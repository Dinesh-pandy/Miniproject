import React from "react";

const Helmet = (props) => {
  document.title = "D-06 APPLIANCES";
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
