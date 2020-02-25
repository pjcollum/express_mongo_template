## Folder Structure

- lib/ contains all local modules
- public/ - any front-end resources, JS, CSS, images etc
- views/ - contains individual pages
- views/layouts contains the layout for how each page will render
- index.js entry point for the application

## NPM Setup

- npm init -y sets up package.json
- npm i path express express-handlebars mongoose body-parser dotenv
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/express-handlebars
- https://www.npmjs.com/package/mongoose
- https://www.npmjs.com/package/body-parser
- https://nodejs.org/en/docs/

## index.js

- add const = require( ) for the installed packages (above)
- - app.use 
- - app.set
- - app.get
- - app.listen(3000), server listening on port 3000

## Public 
- .env file, holds the username and password
- .gitignore file, ignores files when adding to GitHub (google 'node express git ignore")

## Lib Folder

- add an empty index.js so the folder is pushed to GitHub


