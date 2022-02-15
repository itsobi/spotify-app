import { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

const Buffer = require("buffer/").Buffer;
const qs = require("qs");
const spotifyApi = new SpotifyWebApi({
  clientId: "0514ad96e00c46b5b02a076045cc4d8d",
});

const CLIENT_ID = "0514ad96e00c46b5b02a076045cc4d8d";
const CLIENT_SECRET = "047e2723df374a669620329e6b047a86";
const authToken = new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString(
  "base64"
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songResults, setSongResults] = useState([]);

  const accessToken =
    "BQA40qb0UoycWpyJhcqQwM-SSXjVbgfWSP7igdflozJBmcIP_WKM0umabATOhy8ef_LypvQp2yLrmXnYKNs";

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
  //call function that holds POST request
  getAuth();

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchTerm) return null;

    spotifyApi.searchTracks(searchTerm).then((response) => {
      setSongResults(response.body.tracks.items);
      console.log(setSongResults);
    });
  }, [searchTerm, accessToken]);
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
