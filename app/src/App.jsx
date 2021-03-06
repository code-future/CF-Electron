import React, {Component} from 'react'
import {render} from 'react-dom'
import {} from './styles/global.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './views/Home/index.jsx';
import AppHeader from './components/Header.jsx';
import ChatPanel from './views/Home/ChatPanel.jsx';
import CodePanel from './views/Home/CodePanel.jsx';
import { Container, Grid } from 'semantic-ui-react'
import test from './tests/tests';


export default class App extends Component {
    render() {
        return (
            <Container text className='app'>
              <AppHeader />
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <ChatPanel />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <CodePanel initialCode={test.boilerplate} testCases={test.spec} name={test.name}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Container>
        )
    }
}
