import React from "react";
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import Chatbot from 'react-chatbot-kit'

import "./Chat.css";

const Chat = (props) => {
    return (
        <div className="App">
          <header className="App-header">
            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
          </header>
        </div>
      );
};

export default Chat;