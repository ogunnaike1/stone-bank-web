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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  CSSObject,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Search from "./Search";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { SlOptionsVertical } from "react-icons/sl";
import Transfer_page from "./Transfer_page";
import { FiSend } from "react-icons/fi";

const History = () => {
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
                Statement History
              </Box>
              <Box fontSize="14px" color="color.700">
                Keep and manage your money easier with Stone bank
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
              Mini Statement
            </Text>
            <Box
              overflowY="scroll"
              css={customScrollbarStyles}
              p="4"
              bg="color.1100"
              w="100%"
              h={["60vh"]}
            >
              <Stack spacing={["3", "4", "5", "6"]}>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  borderTop="solid 1px"
                  gap={["5", "10", "10", "10"]}
                  borderColor="color.1300"
                  paddingTop="10px"
                  alignItems="center"
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "space-between",
                    "space-between",
                  ]}
                >
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    width={["auto", "auto", "auto", "auto"]}
                    justifyContent="space-between"
                    alignItems={["", "", "end", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      Ogunnaike Isiwat
                    </Text>
                    <Text
                      fontSize={["10px", "12px", "12px", "12px"]}
                      color="color.1200"
                      marginTop={["10px", "10px", "10px", "0"]}
                    >
                      25 january 2024
                    </Text>
                  </Box>
                  <Box
                    display={["", "", "block", "flex"]}
                    gap={10}
                    justifyContent="space-between"
                    width={["auto", "auto", "auto", "auto"]}
                    alignItems={["", "", "", "center"]}
                  >
                    <Text
                      fontSize={["12px", "14px", "20px", "18px"]}
                      fontWeight="600"
                      color="color.1400"
                    >
                      -$328.25
                    </Text>
                    <Text
                      display="flex"
                      fontSize={["10px", "12px", "12px", "12px"]}
                      alignItems="center"
                      marginTop={["10px", "10px", "10px", "0"]}
                      gap={1}
                    >
                      {" "}
                      <Text
                        bg="color.1700"
                        color="color.1600"
                        padding="2px 10px"
                        borderRadius="10px"
                      >
                        Debit
                      </Text>{" "}
                      <SlOptionsVertical />
                    </Text>
                  </Box>
                </Box>
              </Stack>
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
              Recent Activities
            </Text>
            <Text fontSize="14px" color="color.100">
              Recently
            </Text>
          </Box>

          <Box
            width="90%"
            margin="2vh auto 0 auto"
            gap={["15", "40%", "25vh", "8"]}
          >
            <Text
              color="color.1400"
              fontSize="14px"
              fontWeight="700"
              marginTop="5vh"
            >
              Today
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            width="90%"
            margin="2vh auto 0 auto"
            gap={["15", "40%", "25vh", "8"]}
          >
            <Text
              color="color.1400"
              fontSize="14px"
              fontWeight="700"
              marginTop="5vh"
            >
              Yesterday
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 0"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Text fontSize="20px" color="color.1800">
                  <FiSend />
                </Text>
                <Text>
                  <Text color="color.1400" fontSize="14px" fontWeight="500">
                    Ogunnaike Isiwat
                  </Text>
                  <Text color="color.1400" fontSize="12px">
                    Sent
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text color="color.1400" fontSize="14px" fontWeight="500">
                  -$328.85
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default History;
