
If the instructions are unclear or you ever need help, please ask George or ChatGPT for help! You aren't expected to know everything! (but ChatGPT is)

## How to Begin Editing

To begin, please download the repository (preferably through git, but downloading it manually can work).
NOTE: git can be learned through simple online tutorials.

Open Visual Studio Code (or your IDE of choice, but preferably VSCode).
Open the emergegen folder, and navigate to the directory in the IDE terminal (the IDE may sometimes do it for you).
All following commands should be run in the IDE terminal in the emergegen folder.

### `npm install`

This installs all dependencies needed for the project. Warnings can be ignored.

### `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The website will reload when you make changes.

There are other helpful commands such as npm test and npm run build. These can be looked into but will not be needed.

## How to Update The GitHub

Please only update your branch and let Sandy or George know of your progress!

Preferably use git and the Remote Repositories extension in Visual Studio Code. Otherwise, you will need to manually update all the files you changed. For example, if you created new files, you'll need to recreate them in GitHub and copy-paste your new code. 

## Repository Notes

There are 3 main folders within the repository.
- node_modules - DO NOT TOUCH
- public - Upload all images here
- src - Where you'll spend most your time. .js and .css files here

File naming conventions (Search these up if you don't know them!)
- .js files - Upper Camelcase (with the exception of index.js)
- .css files - Kebab Case
- images - Kebab Case

1. Please create a component in the components folder for every "part" you work on, and name it accordingly (DO NOT name it the same as the page name).
2. Please create a css file in the components folder with the same name as the component but with .css naming convention.
3. In the component file, import the css file.
4. NOTE: In React, every imported css file applies to EVERY js file. This is not the case with base HTML and CSS. Because of this, in the .js component file, wrap the entire component in a new div with a new class. In the css file, please every have every declaration start with this class.
5. Import it into the page file and call it (DO NOT write the component directly in the page file). 

EXAMPLE:
1. Welcome.js
2. welcome.css
3. Welcome.js line 1: import './welcome.css';
4. welcome.css: every declaration begins with .wel, since in Welcome.js: the entire component is wrapped in a div with class wel. (Refered to as class chaining)
5. Home.js

Your code doesn't have to be extremely clean! Just make sure it works!

A couple extra notes that may or may not answer your questions:
- Technically, only 1 .css file is needed. We're using multiple so everyone has an easier time. This means we can't have css declarations to cover multiple pages, but that's alright.
- There are better ways to isolate .css files such that they only apply to 1 page. This is the simplest.