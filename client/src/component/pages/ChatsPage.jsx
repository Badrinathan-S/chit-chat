import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/layout"; 
import { ChatState } from "../../context/ChatProvider";
import SideDrawer from "../miscellanous/SideDrawer";

const ChatsPage = () => {
  const { user } = ChatState;
  console.log(user)
  return (<div style={{width: "100%"}}>
      {user && <SideDrawer/>}
    <Box>
      {/* {user && <MyChats/>} */}
      {/* {user && <ChatBot/>} */}
    </Box>
  </div>);
};

export default ChatsPage;
