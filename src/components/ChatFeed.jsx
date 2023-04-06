import messageForm from "./messageForm";
import Mymessage from "./Mymessage";
import Theirmessage from "./Theirmessage";

const ChatFeed = (props) => {
   const {chats, activeChat, userName, messages } = props;

   const chat = chats && chats[activeChat];

   const rendermessages = () => {
    const keys = object.keys(messages);

    console .log(keys);

    return keys.map((key,index) => {
        const message = messages[key];
        const lastmessageKey = index === 0 ? null : keys[index - 1];
        const isMymessage = userName === message.sender.username;

        return (
            <div key={'msg_${index}'} style={{ width:'100%'}}>
<div className="message-block">
 {
    isMymessage
    ? <Mymessage message={message}/>
    : <Theirmessage message={message} lastmessage={messages[lastmessageKey]}/>
 }
</div>
<div className="read-receipts" style={{marginRight:isMymessage ? '18px' : '0px',marginLeft:isMymessage ? '0px' : '68px'}}>
    read-receipts
</div>
            </div>
        );
    })
   }

   rendermessages()

   if(!chat) return 'Loading...'

   return(
    <div className="chat-feed">
        <div className="chat-title-container">
<div className="chat-title">{chat?.title}</div>
<div className="chat-subtitle">
  {chat.people.map((person) => '${person.person.username}')}
</div>
        </div>
      {rendermessages()}
      <div style={{height:'100px'}} />
      <div className="message-from-container">
         <messageForm {...props} chatId={activeChat}/>
      </div>
    </div>
   );
}

export default ChatFeed;