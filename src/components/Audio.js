import { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import MdVolumeUp from 'react-icons/lib/md/volume-up'

export class Audio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
    }

    render() {
        const { playing } = this.state
        return (
            <div>
                <span className='vowel-in-word'>{this.props.vowelInWord.name}</span><span className='audio-icon'><MdVolumeUp onClick={() => this.setState({playing: true})}/></span>
                {
                    playing ? <span>Playing<ReactAudioPlayer
                    src={this.props.vowelInWord.url}
                    onEnded={() => {this.setState({playing: false})}}
                    autoPlay
                        /></span> : null
                }
            </div>
        )
    }
}
