# Shopify Frontend Developer Intern Challenge - Summer 2022

## Hello! 👋

This is my submission for Shopify's Summer 2022 Frontend Developer Intern challenge, using NASA's APOD (A Picture A Day) endpoint.

A live demo of this website can be found at: https://brianhu-spacestagram.netlify.app/

## Running the project locally

1. Acquire a NASA API key from https://api.nasa.gov/
2. Clone this repo: `git clone https://github.com/BriannHu/Shopify-Frontend-Developer-Intern-Challenge.git`
3. Download the necessary dependencies in the folder: `cd spacestagram && npm install`
4. Create a `.env` file and include the following line: `REACT_APP_NASA_API_KEY=<YOUR_API_KEY>` where you replace `<YOUR_API_KEY>` with the key you acquired in step 1.
5. You can now run the server: `npm run`


## Tech Stack

I used React with the Material UI framework to build this project. For state management, I used react-redux and organized the folders with the [Rails-Style pattern](https://livebook.manning.com/book/redux-in-action/chapter-11/7), since this is a relatively small app. To save which photos are liked, local storage is used to save each photo (with the url as the key, and value indicating whether or not the photo has been liked). 

## Core features
- Fetching data from the APOD endpoint and displaying the images (in grid form)
- Showing descriptive data for each image (credits for each image can be seen by hovering over the info icon)
- Liking/unliking an image - either by clicking on the heart or the image itself

## Extra features:
- A calendar to select different start dates
- An instagram-esque animation for liking
- A loading state while the data is being fetched
- Dark mode!
- Using local storage to save the likes/selected start date/selected light or dark mode

## Screenshots

![image](https://user-images.githubusercontent.com/55677478/149648041-00a886ce-3156-4a6a-88da-7154893e8500.png)
![image](https://user-images.githubusercontent.com/55677478/149647928-d15037af-9be1-4d06-afac-4e478c088d6d.png)
