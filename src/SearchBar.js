import { useState, useEffect } from "react";
import axios from "axios";
import Track from "./Track";

const Buffer = require("buffer/").Buffer;
const qs = require("qs");
// const spotifyApi = new SpotifyWebApi({
//   clientId: "0514ad96e00c46b5b02a076045cc4d8d",
// });

const CLIENT_ID = "0514ad96e00c46b5b02a076045cc4d8d";
const CLIENT_SECRET = "047e2723df374a669620329e6b047a86";
const authToken = new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString(
  "base64"
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songResults, setSongResults] = useState([]);

  const getAuth = async () => {
    try {
      //POST request to Spotify API for access token
      const tokenUrl = "https://accounts.spotify.com/api/token";
      const data = qs.stringify({ grant_type: "client_credentials" });

      const response = await axios.post(tokenUrl, data, {
        headers: {
          Authorization: `Basic ${authToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // return access token;
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const searchArtist = async () => {
      const accessToken = await getAuth();
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: searchTerm,
          type: "track",
        },
      });
      setSongResults(
        response.data.tracks.items.map((song) => {
          const smallestImage = song.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, song.album.images[0]);
          return {
            image: smallestImage.url,
            title: song.name,
            link: song.external_urls.spotify,
            id: song.id,
            artist: song.artists[0].name,
          };
        })
      );
    };
    if (!searchTerm) {
      return null;
    }
    searchArtist();
  }, [searchTerm]);

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <input
            className="ui input"
            type="text"
            placeholder="search for song/favorite artist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <div
        className="ui cards"
        style={{ marginTop: "10px", justifyContent: "center" }}
      >
        {songResults.map((song) => {
          return <Track song={song} key={song.id} />;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
