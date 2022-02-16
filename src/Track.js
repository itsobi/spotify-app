import React from "react";

const Track = ({ song }) => {
  return (
    <div className="ui relaxed divided list">
      <div className="item">
        <img
          src={song.image}
          style={{ borderRadius: "3px" }}
          alt="song image"
        />
        <div className="content">
          <a
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            className="header"
          >
            {song.title}
          </a>
          <div className="description">
            <h4>{song.artist}</h4>
          </div>
          <hr style={{ height: "1px", backgroundColor: "#eee" }} />
        </div>
      </div>
    </div>
  );
};

export default Track;
