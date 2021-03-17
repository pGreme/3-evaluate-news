# Evaluate A News Article with Natural Language Processing

Project 4 at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

Dieses Projekt zielt darauf ab, ein Web-Tool zu erstellen, mit dem Benutzer die Verarbeitung natürlicher Sprache (Natural Language Processing, NLP) für Artikel oder Blogs ausführen können, die auf anderen Websites zu finden sind. Wenn ein Benutzer eine URL eines Artikels übermittelt, gibt die Webseite die Stimmungsanalyse zurück, die von der [Meaningcloud-API] (https://www.meaningcloud.com/products/sentiment-analysis) basierend auf dem Inhalt des Artikels zurückgegeben wurde.

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
Stelle sicher, dass npm installiert ist (über das Terminal überprüfen).
node -v
npm -v

1. Gehe zum Projekt Ordner und entpacke hier das Projekt
cd <Ordner> 

2. Installiere Loaders und Plugins
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

3. Melde dich für eine API Key bei meaningcloud.com an
	1. Installiere die dotenv package
	npm install dotenv
	2. Erstelle eine .env Datei im Rootverzeichnis und setze deinen Key ein:
	API_KEY=**************************

4. Starte das Projekt
npm run build-prod` | Build project
npm start | Run project

5. Öffne den Browser auf http://localhost:8060/

