const TheirMessage = ({lastMessage,message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
     <div className="message-row">
         {
            isFirstMessageByUser && (
                <div  
                className="message-avatar"
                style={{backgroundImage:'url(${message?.sender?.avatar})'}}
                />
            )}
{Message?.attachmnts?.length>0
    ?(
        <img
        src={Message.attachmnts[0].file}
        alt="message-attachment"
        className="message-image"
        style={{float:'right'}}
        />
    ) : (
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
        {Message.text}
    </div> 
    )
    }   
     </div>
    );
}
 export default TheirMessage;