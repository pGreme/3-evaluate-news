# Evaluate A News Article with Natural Language Processing

Project 4 at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

The aim of this project is to create a web tool that will allow users to perform natural language processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the website returns the sentiment analysis returned by the [Meaningcloud API] (https://www.meaningcloud.com/products/sentiment-analysis) based on the content of the article.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
To improve if npm is installed (via Terminal).
node -v
npm -v

1. Go to the projekt folder and extract the project
cd <folder> 

2. Install the loaders and plugins
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

3. Log in for the API Key at meaningcloud.com 
	1. Install dotenv package
	npm install dotenv
	2. Build a .env file in the root directory and fill in your Key:
	API_KEY=**************************

4. Start the projekt
npm run build-prod` | Build project
npm start | Run project

5. Open the browser on http://localhost:8060/

