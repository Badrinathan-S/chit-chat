import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ChatsPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async() => {

    const {data} = await axios.get('/api/chats')
    console.log(data);
    setChats(data);
    
  }

  useEffect(() => {
    fetchChats();
  },[])

  return (
    <div>{chats.map((chat) => (<h1 key={chat._id}>{chat.chatName} </h1>))}</div>
  )
}

export default ChatsPage