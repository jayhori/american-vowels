import { Component } from 'react'
import { About } from './About'
import { LookUpWord } from './LookUpWord'
import { NotFound } from './NotFound'
import { Menu } from './Menu'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            about: {
                name:'Jay Hori',
                profession: ['computer programmer', 'software engineer', 'frontend engineer', 'JavaScript programmer'],
                skills: ['JavaScript', 'React', 'TypeScript', 'Angular'],
                position: 1
            }
        }
    }
    render() {
        return (
            <div className='wrapper app'>
                <h1>The Vowels-In-A-Word Dictionary</h1>
                <Menu/>
                {(this.props.location.pathname === '/') ?
                <LookUpWord/> : 
                (this.props.location.pathname === '/about') ?
                <About about={this.state.about} /> :
                <NotFound/>
                }
            </div>
        )
    }
}
