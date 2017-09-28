import { Component } from 'react'
import { About } from './About'
import LookUpWord from './LookUpWord'

export default class extends Component {
  constructor(props) {
    super(props)
    this.showAbout = this.showAbout.bind(this)
    this.hideAbout = this.hideAbout.bind(this)
    this.state = {
      about: {
        firstName: 'Jay',
        lastName: 'Hori',
        profession: 'computer programmer',
        skills: ['JavaScript', 'React', 'TypeScript', 'Angular'],
        city: 'Tokyo',
      },
      aboutIsVisible: true,
    }
  }

  showAbout() {
    this.setState({ aboutIsVisible: true })
  }
  hideAbout() {
    this.setState({ aboutIsVisible: false })
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Vowels in a Word</h1>
          <div className="summary">
            Learning English vowels is not rocket science. Look up
            your favorite word and study accurate sounds of its vowels one by one.
          </div>
        </header>
        <div>
          <LookUpWord
            showAboutStatus={this.state.showAbout}
            showAbout={() => this.showAbout()}
            hideAbout={() => this.hideAbout()}
          />
        </div>
        {
          this.state.aboutIsVisible ?
            <div>
              <a
                onClick={() => this.hideAbout()}
                role="button"
                tabIndex="0"
              >
                Hide about
              </a>
              {this.state.aboutIsVisible ?
                <About about={this.state.about} />
                : null}
            </div> :
            <div>
              <a
                onClick={() => this.showAbout()}
                role="button"
                tabIndex="0"
              >
                Show about
              </a>
            </div>
        }
      </div>
    )
  }
}

