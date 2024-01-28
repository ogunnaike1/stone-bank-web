import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

import { IoPerson } from "react-icons/io5";
import { IoIosHelpCircle, IoMdSettings } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import {
  Link,
  Box,
  Text,
  GridItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <GridItem
        paddingLeft="2vh"
        display={["none", "none", "none", "block"]}
        gridColumn="span 2"
        h="100vh"
        w="100%"
      >
        <Box height="15vh"></Box>

        <Text
          display="flex"
          alignItems="center"
          color="color.1200"
          fontSize="17px"
          fontWeight="700"
          width="160px"
          margin="0 auto"
        >
          General
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          color="color.700"
          gap={5}
          marginTop="3vh"
          fontSize="14px"
        >
          <Link
            as={RouterLink}
            to="/dashboard"
            display="flex"
            gap="15px"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            <MdDashboard /> <Text>Dashboard</Text>
          </Link>
          <Link
            display="flex"
            gap="15px"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            <FaWallet /> <Text>My Wallet</Text>
          </Link>
          <Link
            as={RouterLink}
            to="/history"
            display="flex"
            gap="15px"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            {" "}
            <RiFileHistoryFill /> History
          </Link>
          <Link
            as={RouterLink}
            to="/transfer"
            display="flex"
            gap="15px"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            {" "}
            <IoStatsChartSharp /> Transfer
          </Link>
          <Link
            display="flex"
            gap="15px"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            {" "}
            <RiInboxArchiveFill /> Inbox
          </Link>
          <Link
            display="flex"
            gap="15px"
            color="color.100"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            {" "}
            <IoPerson /> Profile
          </Link>
        </Box>
        <Box
          borderTop="1px solid"
          width="80%"
          margin="4vh auto 0 auto"
          borderColor="color.400"
          display="flex"
          flexDirection="column"
          gap={5}
          fontSize="14px"
        >
          <Text
            width="160px"
            margin="4vh auto 0 auto"
            color="color.1200"
            fontSize="17px"
            fontWeight="700"
          >
            {" "}
            Others
          </Text>
          <Link
            display="flex"
            gap="15px"
            color="color.700"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            <IoIosHelpCircle />
            <Text display="flex" textAlign="center">
              Help & Support
            </Text>
          </Link>
          <Link
            display="flex"
            gap="15px"
            color="color.700"
            alignItems="center"
            width="160px"
            margin="0 auto"
          >
            <IoMdSettings /> <Text>Setting</Text>
          </Link>
          <Link
            display="flex"
            gap="15px"
            color="color.700"
            alignItems="center"
            width="160px"
            margin="3vh auto 0 auto"
          >
            <CgLogOut />
            <Text onClick={onOpen}>Log Out</Text>

            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  Are you sure you want to log out?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose}>No</Button>
                  <Link
                    as={RouterLink}
                    to="/login"
                    bg="red"
                    padding="6px 13px"
                    borderRadius="5px"
                    ml={3}
                  >
                    Yes
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Link>
        </Box>
      </GridItem>
    </>
  );
};

export default Sidebar;
