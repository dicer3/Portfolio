import React from "react";
import loading from "../assets/icons/loading.gif";

const Loading = () => {
  return (
    <div className="loading-div">
      <h3 className="loading">Loading....</h3>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
