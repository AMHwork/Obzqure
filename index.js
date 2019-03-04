class App extends React.Component {

    constructor() {
        super()
        this.state = {
            meesages: DUMMY_DATA
        }
    }

    render() {
        return (
            <div className="app">
            <Title />
            <MessageList />
            <SendMessageForm />
        </div>
        )
    }

}

class MessageList extends React.Component {

    render() {
        return (
            <ul className="message-list">
                {this.props.meesages.map(message => {
                    return(
                        <li key={message.id}>
                            <div>
                                {message.senderId}
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const DUMMY_DATA = [
    {
        sendId: "Austin",
        text: "Hello"
    },
    {
        senderId: "Phillip",
        text: "GoodBye"
    }
]