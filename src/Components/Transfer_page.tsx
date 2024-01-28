import {
  Grid,
  GridItem,
  Input,
  Box,
  Button,
  FormControl,
  Stack,
  Link,
  Text,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Search from "./Search";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Transfer_page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: { target: { value: string } }) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    setInputValue(numericValue);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
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
      <>
        <Navbar />
        <Grid
          templateColumns={[
            "repeat(7, 1fr)",
            "repeat(7, 1fr)",
            "repeat(7, 2fr)",
            "repeat(12, 1fr)",
          ]}
        >
          <Sidebar />
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
                  Transfer Balance
                </Box>
                <Box fontSize="14px" color="color.700">
                  Send Balance To Your Friends
                </Box>
              </Box>
              <Search />
            </Box>

            <Box
              display="flex"
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
                fontSize="20px"
                color="color.500"
                fontWeight="700"
                marginBottom="10px"
              >
                Find Username or Account Number
              </Text>
              <FormControl>
                <Stack spacing={["3", "4", "5", "6"]}>
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    value={inputValue}
                    onChange={handleInputChange}
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Acount name"
                  />
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    value={inputValue}
                    onChange={handleInputChange}
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Account number"
                  />

                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    value={inputValue}
                    onChange={handleInputChange}
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Amount"
                  />
                  <Input
                    height={["4vh", "6vh", "6vh", "7vh"]}
                    borderColor="color.1300"
                    border="solid 1px"
                    borderRadius="15px"
                    placeholder="Note"
                  />
                </Stack>
              </FormControl>
            </Box>
            <Box
              display="flex"
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
                fontSize="20px"
                color="color.500"
                fontWeight="700"
                marginBottom="10px"
              >
                Account Type
              </Text>
              <Box
                borderTop="solid 1px"
                padding="3vh 0"
                borderColor="color.700"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box display="flex" flexDirection="column" gap={2} width="40%">
                  <Text fontSize="18px" fontWeight="700" color="color.1400">
                    Savings
                  </Text>
                  <Text color="color.1500" fontSize="14px" fontWeight="600">
                    $219.78
                  </Text>
                </Box>
                <Box>
                  <Radio
                    value="option1"
                    isChecked={selectedOption === "option1"}
                    onChange={() => handleOptionChange("option1")}
                    borderColor="color.100"
                    borderWidth="2px"
                    p="2"
                    borderRadius="md"
                  ></Radio>
                </Box>
              </Box>

              <Box
                display="flex"
                borderTop="solid 1px"
                padding="3vh 0"
                borderColor="color.700"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box display="flex" flexDirection="column" gap={2} width="40%">
                  <Text fontSize="18px" fontWeight="700" color="color.1400">
                    Current
                  </Text>
                  <Text color="color.1500" fontSize="14px" fontWeight="600">
                    $219.78
                  </Text>
                </Box>
                <Box>
                  <Radio
                    value="option2"
                    isChecked={selectedOption === "option2"}
                    onChange={() => handleOptionChange("option2")}
                    borderColor="color.100"
                    borderWidth="2px"
                    p="2"
                    borderRadius="md"
                  ></Radio>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            gridColumn={["span 7", "span 7", "span 7", "span 3"]}
            w="100%"
            padding={["2vh 0", "2vh 0", "3vh 0", "3vh 0"]}
            display={["block", "block", "block", "block"]}
          >
            <Box
              display="flex"
              width="90%"
              margin="20px auto 0 auto"
              flexDirection="column"
            >
              <Text fontSize="20px" fontWeight="600" color="color.1200">
                Transfer Summary
              </Text>
              <Link fontSize="14px" color="color.700" gap={5} display="flex">
                <Text>Check first before transfer</Text>{" "}
              </Link>
            </Box>

            <Box
              width="90%"
              margin="2vh auto 0 auto"
              gap={["15", "40%", "25vh", "8"]}
            >
              <Box
                width="80%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="14px" color="color.700">
                  Balance amount
                </Text>
                <Text fontSize="15px" color="color.1500">
                  $20.00
                </Text>
              </Box>
              <Box
                width="80%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop="20px"
              >
                <Text fontSize="14px" color="color.700">
                  Admin fee
                </Text>
                <Text fontSize="15px" color="color.1500">
                  $1.00
                </Text>
              </Box>

              <Box
                borderTop="solid 1px"
                borderColor="color.700"
                width="80%"
                color="color.1500"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="20px 0 0 0"
                marginTop="20px"
              >
                <Text>Total</Text>
                <Text>$21.00</Text>
              </Box>
              <Box>
                <Text>(included admin fee)</Text>
              </Box>

              <Box marginTop="3vh" width="90%">
                <Button width="100%" bg="color.100" color="white">
                  Send Amount
                </Button>
              </Box>
            </Box>
            <Box width="90%" margin="2vh auto 0 auto">
              <Text fontSize="19px" fontWeight="600" color="color.1200">
                Send to Beneficiary
              </Text>
              <Text fontSize="14px" color="color.700">
                Transfer some amount to your beneficiary list
              </Text>
            </Box>

            <Box
              width="90%"
              margin="2vh auto 0 auto"
              overflowY="auto"
              height="23vh"
            >
              <Box
                borderRadius="5px"
                _hover={{ bg: "color.1100", cursor: "pointer" }}
                marginTop="10px"
                padding="10px 10px"
                border="solid 1px"
                borderColor="color.700"
              >
                <Text fontSize="15px" color="color.1400" fontWeight="600">
                  Adeboye Samson
                </Text>
              </Box>
              <Box
                borderRadius="5px"
                _hover={{ bg: "color.1100", cursor: "pointer" }}
                marginTop="10px"
                padding="10px 10px"
                border="solid 1px"
                borderColor="color.700"
              >
                <Text fontSize="15px" color="color.1400" fontWeight="600">
                  Madehin Emmanuel
                </Text>
              </Box>
              <Box
                borderRadius="5px"
                _hover={{ bg: "color.1100", cursor: "pointer" }}
                marginTop="10px"
                padding="10px 10px"
                border="solid 1px"
                borderColor="color.700"
              >
                <Text fontSize="15px" color="color.1400" fontWeight="600">
                  Ogunnaike Anota{" "}
                </Text>
              </Box>
              <Box
                borderRadius="5px"
                _hover={{ bg: "color.1100", cursor: "pointer" }}
                marginTop="10px"
                padding="10px 10px"
                border="solid 1px"
                borderColor="color.700"
              >
                <Text fontSize="15px" color="color.1400" fontWeight="600">
                  Ogunnaike Isiwat
                </Text>
              </Box>
            </Box>

            <Box width="90%" margin="1vh auto 0 auto">
              <Button
                borderRadius="5px"
                marginTop="10px"
                width="100%"
                padding="10px 10px"
                gap={2}
                border="solid 1px"
                borderColor="color.700"
              >
                <IoMdAddCircle color="color.100" /> Add Beneficiary
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </>
    </>
  );
};

export default Transfer_page;
