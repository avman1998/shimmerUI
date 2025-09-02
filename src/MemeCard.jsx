import React from "react";

const MemeCard = ({ meme }) => {
  return (
    <div className="m-1 border border-black">
      <img className="h-64 w-64" src={meme.url} alt="meme" />
    </div>
  );
};

export default MemeCard;
