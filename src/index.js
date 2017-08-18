import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import './stylesheets/style.scss'

window.React = React

render(
    <App />,
    document.getElementById('react-container')
)
