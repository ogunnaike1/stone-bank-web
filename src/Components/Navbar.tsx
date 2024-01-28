import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";
import {
  IoIosHelpCircle,
  IoMdSettings,
} from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  AlertDialogContent,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} 
from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <div>
      <Box display={["block", "block", "block", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
          />
          <MenuList color="color.700" fontSize="14px">
            <MenuItem gap={3}>
              <MdDashboard /> <Link as={RouterLink}
            to="/dashboard" >Dashboard</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <FaWallet /> <Link>My Wallet</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <RiFileHistoryFill /> <Link as={RouterLink}
            to="/history">History</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <IoStatsChartSharp /> <Link as={RouterLink}
            to="/Transfer">Transfer</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <RiInboxArchiveFill /> Inbox
            </MenuItem>
            <MenuItem gap={3} color="color.100">
              <IoPerson /> Profile
            </MenuItem>
            <MenuItem gap={3}>
              <IoIosHelpCircle />
              <Link>Help & Support</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <IoMdSettings /> <Link>Setting</Link>
            </MenuItem>
            <MenuItem gap={3}>
              <CgLogOut />
              <Link onClick={onOpen}>Log Out</Link>
              
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
                  <Link   as={RouterLink}
            to="/login" bg='red' padding='6px 13px' borderRadius='5px' ml={3}>
                    Yes
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default Navbar;
