import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'austin',
        text: 'yow testing'
    },
    {
        senderId: 'kevin',
        text: 'Testing !!!'
    },
    {
        senderId: 'austin',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component{

    render() {
        return (
            <div className="message-list">
               {
                   //<div className="help-text">MessageList</div>}
               }
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList