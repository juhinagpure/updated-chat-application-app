const Theirmessage = ({lastmessage,message}) => {
    const isFirstmessageByUser = !lastmessage || lastmessage.sender.username !== message.sender.username;
    return (
     <div className="message-row">
         {
            isFirstmessageByUser && (
                <div  
                className="message-avatar"
                style={{backgroundImage:'url(${message?.sender?.avatar})'}}
                />
            )}
{message?.attachments?.length>0
    ?(
        <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{margin:isFirstmessageByUser ? '4px' : '48px'}}
        />
    ) : (
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
        {message.text}
    </div> 
    )
    }   
     </div>
    );
}
 export default Theirmessage;