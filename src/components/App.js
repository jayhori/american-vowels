import { Component } from 'react'
import { About } from './About'
import { LookUpWord } from './LookUpWord'

export class App extends Component {
    constructor(props) {
        super(props)
        this.showAbout = this.showAbout.bind(this)
        this.hideAbout = this.hideAbout.bind(this)
        this.state = {
            about: {
                first_name:'Jay',
                last_name: 'Hori',
                profession: ['computer programmer', 'software engineer', 'frontend engineer', 'JavaScript programmer'],
                skills: ['JavaScript', 'React', 'TypeScript', 'Angular']
            },
            showAbout: true
        }
    }
    
    showAbout() {
        this.setState({showAbout: true})
    }
    hideAbout() {
        this.setState({showAbout: false})
    }

    render() {
        return (
            <div className='wrapper app'>
                <h1>The Vowels-In-A-Word Dictionary</h1>
                    <div>
                        <LookUpWord
                            showAboutStatus={this.state.showAbout}
                            showAbout={() => this.showAbout()}
                            hideAbout={() => this.hideAbout()}
                        />
                        {this.state.showAbout ? <About about={this.state.about}/> : null}
                    </div>
            </div>
        )
    }
}
