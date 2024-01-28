import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Search = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      {" "}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={["90vh", "90vh", "90vh", "290px"]}
      >
        <InputGroup size="md" width={["70%", "70%", "80%", "200px"]} bg="white">
          <Input
            pr="3.0rem"
            type={show ? "text" : "password"}
            placeholder="Search..."
          />
          <InputRightElement width="3.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              <CiSearch fontSize="25px" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box
          display="flex"
          paddingLeft="auto"
          justifyContent="center"
          alignItems="center"
          height="30px"
          width="30px"
          bg="white"
          borderRadius="50%"
        >
          <IoMdNotificationsOutline
            display="flex"
            fontWeight="700"
            fontSize="22px"
          />
        </Box>
        <Box bg="color.100" height="30px" width="30px" borderRadius="50%"></Box>
      </Box>
    </>
  );
};

export default Search;
