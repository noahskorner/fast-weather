## Fast Weather (https://fast-weather.noahgothacked.com)
An application used to find the current forecast! Built using React, Typescript, TailwindCSS, and Node/ExpressJS.

## Project Status
In Progress. Users can get the current 5 day forecast by searching for a city, or by using their current location. Still need to add daily, 10 day, and 15 day forecast options.

## API Documentation
https://documenter.getpostman.com/view/12120504/UVe9Spt3

## Project Screen Shot(s)
 ![Screenshot 1](/client/screenshots/screenshot-1.png?raw=true "Forecast detail view")
![Screenshot 2](/client/screenshots/screenshot-2.png?raw=true "Searching functionality")
![Screenshot 3](/client/screenshots/screenshot-3.png?raw=true "Fully responsive")

## Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Client Installation:

`cd client`

Install Dependencies:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

Server Installation:

`cd ..`

`cd server`

Create the .env file:

`touch.env`

Add the following to your environment variables:

`NODE_ENV=development`
`ACCUWEATHER_API_KEY={YOUR_API_KEY}`

Install Dependencies:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3001`


