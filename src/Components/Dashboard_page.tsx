import Sidebar from "./Sidebar";
import Search from "./Search";
import {
  FormControl,
  Input,
  Stack,
  Link,
  Box,
  Text,
  Grid,
  GridItem,
  Select,
} 
from "@chakra-ui/react";
import Navbar from "./Navbar";

const Dashboard_page = () => {
  const customScrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  };
  return (
    <>
    <Navbar/>
      <Grid
        templateColumns={[
          "repeat(7, 1fr)",
          "repeat(7, 1fr)",
          "repeat(7, 2fr)",
          "repeat(12, 1fr)",
        ]}
      >
        <Sidebar/>
        <GridItem
          gridColumn="span 7"
          overflowY="scroll"
          css={customScrollbarStyles}
          p="4"
          bg="color.1100"
          w="100%"
          h={["auto", "auto", "auto", "100vh"]}
        >
          <Box
            display="flex"
            alignItems="center"
            width="90%"
            margin="20px auto 0 auto"
            justifyContent="space-between"
            flexWrap="wrap-reverse"
          >
            <Box display="flex" flexDirection="column">
              <Box
                fontSize="20px"
                marginTop={["10px", "10px", "10px", "0px"]}
                fontWeight="600"
                color="color.1200"
              >
                Manage Bank Account
              </Box>
              <Box fontSize="14px" color="color.700">
                Manage Your Bank Account
              </Box>
            </Box>
            <Search/>
          </Box>

          <Box
            display="flex"
            borderColor="red"
            border="solid 1px"
            padding={["2vh 20px", "2vh 20px", "3vh 20px", "5vh 20px"]}
            width="90%"
            borderRadius="15px"
            margin={[
              "2vh auto 0 auto",
              "2vh auto 0 auto",
              "4vh auto 0 auto",
              "5vh auto 0 auto",
            ]}
            bg="white"
            flexDirection="column"
          >
            <Text
              display="flex"
              fontSize="24px"
              color="color.500"
              fontWeight="700"
              marginBottom="10px"
            >
              Add New Account
            </Text>
            <FormControl>
              <Stack spacing={["3", "4", "5", "6"]}>
                <Select
                  height={["4vh", "6vh", "6vh", "7vh"]}
                  display="flex"
                  width="100%"
                  borderColor="color.1300"
                  border="solid 1px"
                  borderRadius="15px"
                  placeholder="Bank Account Name"
                >
                  <option className="option">Option 1</option>
                  <option className="option">Option 2</option>
                  <option className="option">Option 3</option>
                </Select>

                <Input
                  height={["4vh", "6vh", "6vh", "7vh"]}
                  borderColor="color.1300"
                  border="solid 1px"
                  borderRadius="15px"
                  placeholder="Account Name"
                />

                <Box display="flex" gap={5}>
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Account Number"
                  />
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Swift Code"
                  />
                </Box>
                <Input
                  height={["4vh", "6vh", "6vh", "7vh"]}
                  borderColor="color.1300"
                  border="solid 1px"
                  borderRadius="15px"
                  placeholder="Branch"
                />
                <Box display="flex" gap={5}>
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Account Number"
                  />
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Swift Code"
                  />
                </Box>
                <Input
                  height={["4vh", "6vh", "6vh", "7vh"]}
                  borderColor="color.1300"
                  border="solid 1px"
                  borderRadius="15px"
                  placeholder="Branch"
                />
              </Stack>
            </FormControl>
          </Box>
        </GridItem>
        <GridItem
          gridColumn={["span 7", "span 7", "span 7", "span 3"]}
          w="100%"
          padding={["2vh 0", "2vh 0", "3vh 0", "10vh 0"]}
          display={["block", "block", "block", "block"]}
        >
          <Box
            display="flex"
            width="90%"
            margin="20px auto 0 auto"
            flexDirection="column"
          >
            <Text fontSize="20px" fontWeight="600" color="color.1200">
              BRI Master Card
            </Text>
            <Link fontSize="12px" color="color.700" gap={5} display="flex">
              <Text>Transaction</Text>{" "}
              <Text fontSize="12px" color="color.100">
                Details
              </Text>
            </Link>
          </Box>

          <Box
            width="90%"
            display="flex"
            margin="5vh auto 0 auto"
            gap={["15", "40%", "25vh", "8"]}
          >
            <Box>
              <Text fontSize="14px" color="color.1400">
                Account Number
              </Text>
              <Link fontSize="12px" color="color.700">
                (603) 555-0123
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Swift Code
              </Text>
              <Link fontSize="12px" color="color.700">
                12345
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                IBAN
              </Text>
              <Link fontSize="12px" color="color.700">
                CY84684699283898
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Credit Interest rate
              </Text>
              <Link fontSize="12px" color="color.700">
                20%
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Overdue Limit
              </Text>
              <Link fontSize="12px" color="color.700">
                10$
              </Link>
            </Box>
            <Box>
              <Text fontSize="14px" color="color.1400">
                Account Name
              </Text>
              <Link fontSize="12px" color="color.700">
                Ogunnaike Usman
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Branch
              </Text>
              <Link fontSize="12px" color="color.700">
                Ikeja
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Associate Products
              </Text>
              <Link fontSize="12px" color="color.700">
                AB Overdraft
              </Link>
              <Text fontSize="14px" marginTop="3vh" color="color.1400">
                Debit Interest Rate
              </Text>
              <Link fontSize="12px" color="color.700">
                7.586%
              </Link>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard_page;
function useDisclosure(): { isOpen: any; onOpen: any; onClose: any } {
  throw new Error("Function not implemented.");
}
