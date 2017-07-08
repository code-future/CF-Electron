import React, {Component} from 'react'
import {} from '../../styles/global.css'
import { Image, List } from 'semantic-ui-react'

export default class ChatPanel extends Component {
    render () {
        return (
            <List relaxed divided>
                <List.Item>
                  <Image avatar src='https://cdn0.iconfinder.com/data/icons/social-productivity-line-art-5/128/chatbot-oval-512.png' />
                  <List.Content>
                    <List.Header as='a'>CodeFuture</List.Header>
                    <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src='https://cdn0.iconfinder.com/data/icons/social-productivity-line-art-5/128/chatbot-oval-512.png' />
                  <List.Content>
                    <List.Header as='a'>CodeFuture</List.Header>
                    <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src='https://cdn0.iconfinder.com/data/icons/social-productivity-line-art-5/128/chatbot-oval-512.png' />
                  <List.Content>
                    <List.Header as='a'>CodeFuture</List.Header>
                    <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
                  </List.Content>
                </List.Item>
            </List>
        )
    }
}
