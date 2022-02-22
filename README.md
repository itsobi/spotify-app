# Obi's Spotify App

Music app using Spotify API that allows user to search and play any song on Spotify.

## Project Description

In the searchbar, enter any artist/song you have in mind. The app will render a list of 20 tracks on the screen. Once you click a card on screen, a new tab of the song on Spotify will open on your browser. From there you will be able to listen to the track on Spotify!

## Technologies Used

ReactJS, Spotify API, Semantic-UI

## Quick Start

- Download zip file or clone the repository on your local machine, and open it up in your text editor.

- In the terminal, run `npm install` to install all libraries allowing you to make request to Spotify API.

- Next, create a `.env` file in the root directory to store your Spotify Credentials as shown below:
(variable name must have prefix of REACT_APP_)

`REACT_APP_CLIENT_ID = XXXXXXXXXXXXXXXXX`
`REACT_APP_CLIENT_SECRET = XXXXXXXXXXXXXXXXX`

- To get these credientials, you must go to [My Dashboard](https://developer.spotify.com/dashboard/), log in with your Spotify account. Click on "Create an app". Pick an "App name" and "App description" of your choice and mark the checkboxes. After creation, your "Client Id" will show and you can click on "Show client secret" to unhide your "Client secret".

- To refer to these variables anywhere in the project: `process.env.REACT_APP_CLIENT_ID`, `process.env.REACT_APP_CLIENT_SECRET`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

