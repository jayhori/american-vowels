import { Component } from 'react'
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
        this.findVowels(this.state.word.pronunciation.all)
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
        let symbols = []
        for (let i=0; i < pronunciation.length; i++) {
            if (vowels[pronunciation.charAt(i)]) {
                let pronunciationObject = {}
                pronunciationObject.name = pronunciation.charAt(i)
                pronunciationObject.url = vowels[pronunciation.charAt(i)]
                symbols.push(pronunciationObject)
            }
        }
        this.setState({symbols: symbols})
    }

    render() {
        const { word, loading, submitted, errorMessage, symbols } = this.state
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
                            { symbols ?
                                symbols.map(
                                    (symbol, index) => (
                                            <Audio
                                                symbol={symbol}
                                            />)
                                ) : null
                            }
                        </div>
                        <h3>Definitions of <span className='uppercase'>{word.word}:</span></h3>
                        <ul>{word.results.map(
                            (data, key) =>
                            (key < 3) ?
                            <li key={key}>
                                <span className='key'>{key + 1}.</span>
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
