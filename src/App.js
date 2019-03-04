import React, { Component } from 'react';
//import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import Chatkit from '@pusher/chatkit-client';
//import MessageList from './components/MessageList'

import { tokenURL, instanceLocator } from './config';

class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'austin',
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenURL
        })
    })
    
    chatManager.connect()
    .then(currentUser => {
        currentUser.subscribeToRoom({
            roomId: '19390012',
            hooks: {
                onNewMessage: message => {
                    console.log('message.text: ', message.text);
                }
            }
        })
    })
}

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
