import { Component } from 'react'
import filter from 'lodash'
import GoSearch from 'react-icons/lib/go/search'
import { credentials } from '../credentials'
import { Audio } from './Audio'
import { vowels } from '../vowels'

export class LookUpWord extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            submitted: false
        }
        this.submit = this.submit.bind(this)
    }

    async submit(e) {
        this.setState({loading: true})
        this.setState({submitted: true})
        e.preventDefault()
        await this.fetchWord(this.refs.word.value)
            .then(word => {this.setState({
                    word,
                    loading: false
                })
            })
        this.setState({vowelsInWord: this.findVowels(this.state.word.pronunciation.all)})
    }

    async fetchWord(word) {
        let headers = new Headers()
        headers.append('X-Mashape-Key', credentials.mashapeKey)
        headers.append('Accept', 'application/json')
        let request = new Request('https://wordsapiv1.p.mashape.com/words/' + word.toLowerCase(), {headers: headers})
        let data = await fetch(request)
            .then(response => 
                !response.ok ? 
                    this.setState({
                        loading: false,
                        errorMessage: response.statusText
                    }):
                response 
            )
            .then(response => response.json())
            .then(json => json)
        return data
    }
    findVowels(pronunciation) {
        let vowelsInWord = []
        const checkEachCharacter = n => {
            if (pronunciation.charAt(n)) {
                const filteredObjects = _.filter(vowels, vowel => {
                    return vowel.name === pronunciation.charAt(n)
                })
                if (filteredObjects.length > 1) {
                    console.log('Warning: there are duplicates in data.')
                }
                if (filteredObjects.length > 0) {
                    vowelsInWord.push(filteredObjects[0])
                }
                checkEachCharacter(n+1)
            }
        }
        checkEachCharacter(0)
        return vowelsInWord
    }

    render() {
        const { word, loading, submitted, errorMessage, vowelsInWord } = this.state
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div className='search'>
                        <input id='word' type='text' ref='word' placeholder='Search' required />
                        <button><GoSearch/></button>
                    </div >
                </form>
                { loading ? <div><span className='loading'>Loading...</span></div> :
                    errorMessage ? <span>{errorMessage}</span> :
                    submitted ?
                    <div className='pronunciation-container'>
                        <h3>The International Phonetic Alphabet of <span className='uppercase'> {word.word}</span>:</h3>
                        <span className='pronunciation'>{word.pronunciation.all}</span>
                        <h3>Vowels of <span className='uppercase'>{word.word}</span>:</h3>
                        <div className='audio-container'>
                            { vowelsInWord ?
                                vowelsInWord.map(
                                    (vowelInWord, index) => (
                                            <Audio
                                                vowelInWord={vowelInWord}
                                            />)
                                ) : null
                            }
                        </div>
                        <h3>Definitions of <span className='uppercase'>{word.word}:</span></h3>
                        <ul>{word.results.map(
                            (data, key) =>
                            (key < 3) ?
                            <li key={key}>
                                <span className='key'>{key + 1}</span>
                                <div className='definition'>{data.definition}</div>
                            </li> :
                            null
                        )}</ul>
                    </div> : null
                }
            </div>
        )
    }
}
