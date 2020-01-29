/* eslint-disable react/jsx-tag-spacing */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/style.scss'
import AppContainer from './views/'

class App extends Component {
    render() {
        return <AppContainer / >

    }
}

ReactDOM.render( < App / > , document.getElementById('root'))