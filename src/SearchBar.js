import { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

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
    if (!searchTerm) {
      return null;
    }
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
      console.log(response.data);
    };
    searchArtist();
  }, [searchTerm]);

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <input
            type="text"
            placeholder="search for song/favorite artist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
