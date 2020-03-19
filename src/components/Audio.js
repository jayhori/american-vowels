import { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import MdVolumeUp from 'react-icons/lib/md/volume-up'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
    }
  }

  render() {
    const { isPlaying } = this.state
    return (
      <span>
        <span className="vowel-in-word">{this.props.vowelInWord.name}</span>
        <span className="audio-icon">
          <MdVolumeUp onClick={() => this.setState({ isPlaying: true })} />
        </span>
        {isPlaying ? (
          <span>
            <ReactAudioPlayer
              src={this.props.vowelInWord.url}
              onEnded={() => {
                this.setState({ isPlaying: false })
              }}
              autoPlay
            />
          </span>
        ) : null}
      </span>
    )
  }
}
