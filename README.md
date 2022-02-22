# Obi's Spotify App

Music app using Spotify API that allows user to search and play any song on Spotify.

## Project Description

In the searchbar, enter any artist/song you have in mind. The app will render a list of 20 tracks on the screen. Once you click a card on screen, a new tab of the song on Spotify will open on your browser. From there you will be able to listen to the track on Spotify.

## Technologies Used

ReactJS, Spotify API, Semantic-UI

## Quick Start

- Download zip file or clone the repository on your local machine, and open it up in your text editor.

- Next, create a .env file in the root directory to store your Spotify Credentials as shown below:
(variable name must have prefix of REACT_APP_)

`REACT_APP_CLIENT_ID = XXXXXXXXXXXXXXXXX`
`REACT_APP_CLIENT_SECRET = XXXXXXXXXXXXXXXXX`

- To refer to these variables anywhere in the project: `process.env.REACT_APP_CLIENT_ID`

- Next, in the terminal, `npm install axios` to install the axios library, allowing you to make request to Spotify API.

- Then, at the top of the component you wish to make the API request:

`import axios from "axios"` and `import { useState, useEffect } from "react"`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

