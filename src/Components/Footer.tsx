import { useState } from "react";
import {
  Input,
  Button,
  Link,
  Box,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="div-footer">
      <Box
        paddingTop="5vh"
        width="90%"
        display="flex"
        margin="0 auto"
        flexDirection="column"
      >
        <Text fontSize="20px" fontWeight="500">
          Stay up to date
        </Text>
        <Text>Monthly digest of what's new and exciting from us.</Text>
        <Box
          display="flex"
          flexDirection={["column", "row", "row"]}
          borderRadius="20px"
          height={["80px", "50px"]}
          justifyContent="space-between"
          marginTop="10px"
          alignItems="center"
          maxWidth={["100vw", "60vw", "39vw"]}
        >
          <Input
            borderRadius="10px"
            type="email"
            maxWidth={["100%", "40vw", "28vw"]}
            placeholder="Enter email"
          />
          <Button
            marginTop={["10px", "0px", "0px"]}
            padding={["5px 0vh", "0 0vh", "0 0vh"]}
            width={["100%", "18vw", "10vw"]}
            borderRadius="10px"
            bg="color.100"
            color="white"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={2}
        width="90%"
        margin="8vh auto 0 auto"
      >
        <GridItem w="100%">
          <Box display="flex" gap={3} flexDirection="column">
            <Text fontWeight="500">PERSONAL</Text>
            <Link>Savings</Link>
            <Link>Raven Cards</Link>
            <Link>Overdrafts</Link>
            <Link>Finalytics</Link>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            gap={3}
            flexDirection="column"
            marginTop={["20px", "0px", "0px"]}
          >
            <Text fontWeight="500">FOR BUSINESS</Text>
            <Link>Business Banking</Link>
            <Link>Card Issuing</Link>
            <Link>Business Loans</Link>
            <Link>Raven POS</Link>
            <Link>Atlas</Link>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            gap={3}
            flexDirection="column"
            marginTop={["20px", "10px", "0px"]}
          >
            <Text fontWeight="500">COMPANY</Text>
            <Link>About Us</Link>
            <Link>Careers</Link>
            <Link>Blog</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            gap={3}
            flexDirection="column"
            marginTop={["20px", "10px", "0px"]}
          >
            <Text fontWeight="500">HELP</Text>
            <Link>FAQ</Link>
            <Link>Supports</Link>
            <Link>Talk To Our Mascot</Link>
            <Link>Security</Link>
          </Box>
        </GridItem>
      </Grid>
      <Box
        width="90%"
        display="flex"
        margin="10vh auto 0 auto"
        height="1px"
        bg="white"
      ></Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={2}
        alignItems="center"
        width="90%"
        margin="20px auto 0 auto"
      >
        <GridItem w="100%">
          <Box display="flex" gap={3} flexDirection="column"></Box>
          <Box>
            <Text>Stone Bank</Text>
            <Text fontSize="12px">
              © 2022 Company, Inc. All rights reserved.
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            display="flex"
            gap={3}
            fontSize="12px"
            justifyContent={["start", "start", "end"]}
            marginTop={["10px", "10px", ""]}
          >
            <Link
              borderRight="solid 1px"
              borderColor=" color.1000"
              paddingRight="20px"
            >
              Privacy Policy
            </Link>
            <Link
              borderRight="solid 1px"
              borderColor=" color.1000"
              paddingRight="20px"
            >
              Cookies
            </Link>
            <Link
              borderRight="solid 1px"
              borderColor=" color.1000"
              paddingRight="20px"
            >
              Legal
            </Link>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
