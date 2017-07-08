import React, {Component} from 'react'
import {render} from 'react-dom'
import {} from './styles/global.css'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './views/Home/index.jsx'


export default class App extends Component {
    render() {
        return (
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
        )
    }
}
