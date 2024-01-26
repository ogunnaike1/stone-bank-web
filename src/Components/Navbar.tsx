import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoIosHelpCircle,
  IoMdSettings,
} from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import {
  Box,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} 
from "@chakra-ui/react";

const Navbar = () => {
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
              <MdDashboard /> <Text>Dashboard</Text>
            </MenuItem>
            <MenuItem gap={3}>
              <FaWallet /> <Text>My Wallet</Text>
            </MenuItem>
            <MenuItem gap={3}>
              <RiFileHistoryFill /> History
            </MenuItem>
            <MenuItem gap={3}>
              <IoStatsChartSharp /> Stastics
            </MenuItem>
            <MenuItem gap={3}>
              <RiInboxArchiveFill /> Inbox
            </MenuItem>
            <MenuItem gap={3} color="color.100">
              <IoPerson /> Profile
            </MenuItem>
            <MenuItem gap={3}>
              <IoIosHelpCircle />
              <Text>Help & Support</Text>
            </MenuItem>
            <MenuItem gap={3}>
              <IoMdSettings /> <Text>Setting</Text>
            </MenuItem>
            <MenuItem gap={3}>
              <CgLogOut />
              <Text>Log Out</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default Navbar;
