# American Vowels

This React app describes General American vowels in an English word in the International Phonetic Alphabet. The IPA is notorious for its use of the principle of accurate one-to-one correspondence between sounds and symbols.

## Getting Started

The instructions help you set up the project on your local machine.

### Installing dependencies

- Run `npm install`

### Registering for and implementing Words API

The app uses a third party RESTful api that returns the descriptions of a word.

- Register for [Words API](https://www.wordsapi.com/)
- Open the React component `LookUpWords.js`
- In the component, find `credentials.mashapeKey` and replace it with the key you received from the provider of Words API.

### Starting a local server

- Run `npm start` to start a local server
- Go to port 3000 (localhost:3000)
