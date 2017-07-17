import { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

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
                <span>{this.props.symbol.name}</span><button onClick={() => this.setState({playing: true})} >Play</button>
                {
                    playing ? <span>Audio is playing<ReactAudioPlayer
                    src={this.props.symbol.url} 
                    onEnded={() => {this.setState({playing: false})}}
                    autoPlay
                        /></span> : null
                }
            </div>
        )
    }

}
