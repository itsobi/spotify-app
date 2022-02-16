import React from "react";

const Track = ({ song }) => {
  console.log(song);
  return (
    <div className="ui relaxed divided list">
      <div className="item">
        <img src={song.image} alt="song image" />
        <div className="content">
          <a href={song.link} className="header">
            {song.title}
          </a>
          <div className="description">{song.artist}</div>
        </div>
      </div>
    </div>
  );
};

export default Track;
