import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../../context/ChatProvider";
import SideDrawer from "../miscellanous/SideDrawer";
import MyChats from "../MyChats";
import ChatBox from "../ChatBox";

const ChatsPage = () => {
  const { user } = ChatState();
  console.log(user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatsPage;
