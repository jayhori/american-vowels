import { Component } from 'react'
import { About } from './About'
import LookUpWord from './LookUpWord'

export default class extends Component {
  constructor(props) {
    super(props)
    this.setLoadingStateToTruthy = this.setLoadingStateToTruthy.bind(this)
    this.setLoadingStateToFalsy = this.setLoadingStateToFalsy.bind(this)
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
      aboutIsVisible: false,
      loading: false,
    }
  }

  setLoadingStateToTruthy() {
    this.setState({ loading: true })
  }
  setLoadingStateToFalsy() {
    this.setState({ loading: false })
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
            Look up an English word and study accurate sounds of its vowels one by one.
          </div>
        </header>
        <div>
          <LookUpWord
            showAboutStatus={this.state.showAbout}
            loading={this.state.loading}
            setLoadingStateToTruthy={() => this.setLoadingStateToTruthy()}
            setLoadingStateToFalsy={() => this.setLoadingStateToFalsy()}
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
                className="button"
              >
                Hide About
              </a>
              {this.state.aboutIsVisible ?
                <About about={this.state.about} />
                : null}
            </div> :
            !this.state.loading ?
              <div>
                <a
                  onClick={() => this.showAbout()}
                  role="button"
                  tabIndex="0"
                  className="button"
                >
                  Show About
                </a>
              </div> : null
        }
      </div>
    )
  }
}

