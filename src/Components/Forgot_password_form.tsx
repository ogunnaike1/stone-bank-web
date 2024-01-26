import { useState } from "react";
import {
  Container,
  Flex,
  Icon,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaArrowLeft, FaPhone } from "react-icons/fa";
import Footer from "./Footer";

import {
  FormControl,
  Card,
  CardBody,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
  Heading,
  Link,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Forgot_password_form = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="div-main">
      <div className="div-form-container">
        <div className="div-form">
          <Card>
            <CardBody>
              <FormControl>
                <Stack spacing={3}>
                  <Text
                    fontSize={["1.6rem", "1.9rem", "1.8rem"]}
                    fontWeight="800"
                    size="md"
                    textAlign="center"
                    color="color.300"
                  >
                    Forgot Password
                  </Text>
                  <Text textAlign="center" color="color.400">
                    Please select option to send link reset password
                  </Text>
                  <Box
                    border="solid 1px"
                    borderRadius="10px"
                    borderColor="color.500"
                  >
                    <Stack spacing={["10", "7", "4"]}>
                      <Box
                        display="flex"
                        alignItems="center"
                        width="90%"
                        margin="20px auto 0 auto"
                      >
                        <Box
                          objectFit="contain"
                          bg="color.500"
                          maxW="60px"
                          width="60px"
                          height="60px"
                          display="flex"
                          borderRadius="50%"
                        >
                          <Icon
                            objectFit="cover"
                            margin="auto"
                            as={FaEnvelope}
                            boxSize={6}
                            color="white"
                          />
                        </Box>
                        <Box marginLeft="20px">
                          <Text
                            color="color.300"
                            fontWeight="700"
                            fontSize={["1.0rem", "1.0rem", "1.0rem"]}
                          >
                            Reset via Email
                          </Text>
                          <Text
                            color="color.400"
                            fontWeight="600"
                            fontSize={["0.7rem", "0.7rem", "0.8rem"]}
                          >
                            Will we send a link to reset your password
                          </Text>
                        </Box>
                      </Box>
                      <Input
                        display="flex"
                        width="90%"
                        height="50px"
                        margin=" 0 auto 20px auto"
                        type="email"
                        placeholder="Enter email"
                      />
                    </Stack>
                  </Box>
                  <Box
                    border="solid 1px"
                    borderRadius="10px"
                    borderColor="color.500"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      width="90%"
                      margin="10px auto 10px auto"
                    >
                      <Box
                        bg="color.600"
                        width="60px"
                        height="60px"
                        display="flex"
                        borderRadius="50%"
                      >
                        <Icon
                          margin="auto"
                          as={FaPhone}
                          boxSize={6}
                          color="white"
                        />
                      </Box>
                      <Box marginLeft="20px">
                        <Text
                          color="color.400"
                          fontWeight="700"
                          fontSize={["1.0rem", "1.0rem", "1.0rem"]}
                        >
                          Reset via SMS
                        </Text>
                        <Text
                          color="color.400"
                          fontWeight="600"
                          fontSize={["0.7rem", "0.7rem", "0.8rem"]}
                        >
                          Will we send a link to reset your password
                        </Text>
                      </Box>
                    </Box>
                    <InputGroup
                      margin=" 0 auto 20px auto"
                      display="flex"
                      width="90%"
                      height="50px"
                    >
                      <InputLeftAddon height="100%">+234</InputLeftAddon>
                      <Input
                        type="tel"
                        placeholder="(123)-456-7890"
                        height="100%"
                      />
                    </InputGroup>
                  </Box>
                  <Button bg="color.100" color="white" onClick={props.onClick}>
                    Send Link Reset Password
                  </Button>
                  <Box
                    color="color.200"
                    display="flex"
                    fontSize="14px"
                    alignItems="center"
                  >
                    <Button
                      gap="10px"
                      bg="transparent"
                      _hover={{ bg: "#E2E8F0" }}
                      onClick={props.onClick}
                    >
                      <Icon as={FaArrowLeft} boxSize={4} color="color.400" />
                      <Text
                        fontSize={["1.0rem", "1.0rem", "1.0rem"]}
                        fontWeight="500"
                        color="color.400"
                      >
                        Back to Login
                      </Text>
                    </Button>
                  </Box>
                </Stack>
              </FormControl>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Forgot_password_form.propTypes = {
  onClick: PropTypes.func,
};
export default Forgot_password_form;
