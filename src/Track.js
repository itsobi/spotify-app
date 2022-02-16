import React from "react";

const Track = ({ songs }) => {
  console.log(songs);
  return (
    <div className="ui relaxed divided list">
      <div className="item">
        <img src={songs.image} alt="song image" />
        <div className="content">
          <a href={songs.link}>{songs.name}</a>
        </div>
      </div>
    </div>
  );
};

export default Track;
