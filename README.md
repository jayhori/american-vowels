# English Pronunciation Dictionary

This English dictionary, a React app, uses the [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet), which is notorious for its use of the principle of accurate one-to-one correspondence between sounds and symbols although the learning curve of the symbols is steep.

## Getting Started
The instructions help you set up the project on your local machine.

### Installing dependencies

- Run `npm install` to. NPM will create a directory called node_modules, look into package.json and dependencies described in it, install them, and put them in the directory.

### Implementing Words API
The app uses a third party RESTful api that returns the descriptions of a word.

- Register for [Words API](https://www.wordsapi.com/)
- Open the React component `LookUpWords.js` 
- In the component, find `credentials.mashapeKey` and replace it with the key you received from the provider of Words API.

### Starting a local server

- Run `npm start` to start a local server
- Go to port 3000 (localhost:3000)