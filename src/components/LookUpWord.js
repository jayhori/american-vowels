import { Component } from 'react'
import GoSearch from 'react-icons/lib/go/search'
import { credentials } from '../credentials'

export class LookUpWord extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            submitted: false
        }
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        this.setState({loading: true})
        this.setState({submitted: true})
        e.preventDefault()
        this.fetchWord(this.refs.word.value)
            .then(word => {this.setState({
                    word,
                    loading: false
                })
            })
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

    render() {
        const { word, loading, submitted, errorMessage } = this.state
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div className='search'>
                        <input id='word' type='text' ref='word' placeholder='Search' required />
                        <button><GoSearch/></button>
                    </div >
                </form>
                <div>
                { loading ? <div><span className='loading'>Loading...</span></div> :
                    errorMessage ? <span>{errorMessage}</span> :
                    submitted ?
                    <div className='pronunciation-container'>
                        <p>The International Phonetic Alphabet of {word.word}:</p>
                        <p className='pronunciation'>{word.pronunciation.all}</p>
                        <p>Definitions of {word.word}:</p>
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
            </div>
        )
    }
}
