import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { App } from './components/App'
import './stylesheets/style.scss'

window.React = React

render(
    <HashRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='about' component={App} />
        </div>
    </HashRouter>
    ,
    document.getElementById('react-container')
)
