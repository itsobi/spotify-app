import React from "react";

const Track = ({ song }) => {
  return (
    <a
      href={song.link}
      target="_blank"
      rel="noopener noreferrer"
      className="ui red card"
    >
      <div className="content">
        <div className="header">{song.title}</div>
        <div className="meta">
          <span className="category">
            <h4>{song.artist}</h4>
          </span>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated content">
          <img
            src={song.image}
            alt="song image"
            className="ui image"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
    </a>
  );
};

export default Track;
