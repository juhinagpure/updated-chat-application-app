import { ChatEngine, ChatFeed } from "react-chat-engine";

import './App.css';

const App = () => {
    return (
       <ChatEngine
       height="100vh"
       projectID="a29ef303-622d-4e0e-954f-79cc81be8de7"
       userName="Juhi123"
       userSecret="123123"
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />
    );
}

export default App