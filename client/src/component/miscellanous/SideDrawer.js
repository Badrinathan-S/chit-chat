import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = () => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box>
        <Tooltip label="search user to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
