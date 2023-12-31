import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { format } from "date-fns"

const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({behavior:"smooth"})
    },[message])

    return (
        <div ref = {ref}
            className={`message ${message.senderID === currentUser.uid && "owner"}`}
        >
            <div className="messageInfo">
                <img src={message.senderID === currentUser.uid ? currentUser.photoURL : data.user.photoURL}/>
            </div>
            <div className="messageContent">
                {message.text !== "" && <p>{message.text}</p>}
                {message.img && <img src={message.img} />}
                
                {/* if({message.date.toDate().toLocaleString('en-US', { timeZone: 'IST', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}===) */}
                {/* <span>{message.date.toDate().toDateString()}</span> */}
                <span>{message.date.toDate().toLocaleString('en-US', { timeZone: 'IST' })}</span>    
                {/* <span>{message.date.toDate().toLocaleString('en-US', { timeZone: 'IST', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</span> */}

            </div>
        </div>
    )
    
}

export default Message
