import { Component } from 'react'
import credentials from '../credentials'
import Audio from './Audio'
import generalAmericanVowels from '../assets/generalAmericanVowels'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
    this.submit = this.submit.bind(this)
    this.findVowels = this.findVowels.bind(this)
    this.fetchWord = this.fetchWord.bind(this)
  }

  async submit(e) {
    this.props.setLoadingStateToTruthy()
    this.setState({ submitted: true })
    e.preventDefault()
    await this.fetchWord(this.textInput.value).then(word => {
      this.setState({ word })
      this.props.setLoadingStateToFalsy()
    })
    this.setState({
      vowelsInWord: this.findVowels(
        this.state.word.pronunciation.all,
        generalAmericanVowels
      ),
    })
  }

  async fetchWord(word) {
    const headers = new Headers()
    headers.append('X-Mashape-Key', credentials.mashapeKey)
    headers.append('Accept', 'application/json')
    const request = new Request(
      `https://wordsapiv1.p.mashape.com/words/${word.toLowerCase()}`,
      { headers }
    )
    const data = await fetch(request)
      .then(response =>
        !response.ok
          ? (this.setState({ errorMessage: response.statusText }),
            this.props.setLoadingStateToFalsy())
          : response
      )
      .then(response => response.json())
      .then(json => json)
    return data
  }

  findVowels(pronunciation, vowels) {
    this.vowelsInWord = []
    const checkEachCharacter = n => {
      if (pronunciation.charAt(n)) {
        const filteredObject = vowels.filter(
          vowel => vowel.name === pronunciation.charAt(n)
        )
        if (filteredObject.length > 0) {
          this.vowelsInWord.push(filteredObject[0])
        }
        checkEachCharacter(n + 1)
      }
    }
    checkEachCharacter(0)
    return this.vowelsInWord
  }

  render() {
    const { isLoading } = this.props
    const { word, submitted, errorMessage, vowelsInWord } = this.state
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="search">
            <input
              id="word"
              type="text"
              ref={input => {
                this.textInput = input
              }}
              placeholder="e.g. basketball"
              aria-label="text_input"
              required
            />
            <button aria-label="go_search_button" className="button">
              Search
            </button>
          </div>
        </form>
        {isLoading ? (
          <div>
            <span className="loading">Loading...</span>
          </div>
        ) : errorMessage ? (
          <span>{errorMessage}</span>
        ) : submitted ? (
          <div>
            <div className="the-word">{word.word}</div>
            <span className="pronunciation">{word.pronunciation.all}</span>
            <div className="audio-container">
              {vowelsInWord
                ? vowelsInWord.map(vowelInWord => (
                    <Audio vowelInWord={vowelInWord} />
                  ))
                : null}
            </div>
            <div>Definitions:</div>
            <ul>
              {word.results.map((data, key) => ( <li className="key-container"> <span className="key">{key + 1}.</span> <div className="definition">{data.definition}</div> </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}
