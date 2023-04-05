const MyMessage = ({Message}) => {
    if(Message?.attachmnts?.length>0) {
    return(
        <img
        src={Message.attachmnts[0].file}
        alt="message-attachment"
        className="message-image"
        style={{float:'right'}}
        />
    )
}
    return (
     <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
         {Message.text}
     </div>
    );
 }
 
 export default MyMessage;