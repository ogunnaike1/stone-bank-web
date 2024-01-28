import { useState } from "react";
import Footer from "./Footer";
import { Link as RouterLink } from "react-router-dom";
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

const Login_form = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="div-main">
      <div className="div-form-container">
        <div className="div-form">
          <Card>
            <CardBody>
              <FormControl>
                <Stack spacing={["10", "7", "5"]}>
                  <Text
                    fontSize={["1.6rem", "1.9rem", "1.8rem"]}
                    fontWeight="800"
                    as="h4"
                    size="md"
                    textAlign="center"
                    mb="10px"
                    color="color.300"
                  >
                    Login
                  </Text>
                  <Input value={props.email} onChange={props.onSetEmail} type="email" placeholder="Enter email" />
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      value={props.password}
                      onChange={props.onSetPassword} 
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button bg="color.100" color="white">
                    Login
                  </Button>
                  <Link
                    as={RouterLink}
                    to="/auth/forgot-password"
                    onClick={props.forgotPassword}
                    fontSize="14px"
                    fontWeight=""
                    textAlign="end"
                    color="color.200"
                  >
                    Forgot Password?
                  </Link>
                  <Box
                    color="color.200"
                    display="flex"
                    justifyContent="end"
                    gap="5px"
                    fontSize="14px"
                  >
                    <Text>Don't have an account?</Text>
                    <Link
                      as={RouterLink}
                      to="/auth/sign-up"
                      onClick={props.onClick}
                      color="blue"
                      fontWeight=""
                      textAlign="end"
                    >
                      Sign up
                    </Link>
                  </Box>
                </Stack>
              </FormControl>
            </CardBody>
          </Card>
        </div>
      </div>

    </div>
  );
};

Login_form.propTypes = {
  onClick: PropTypes.func,
  forgotPassword: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onSetEmail: PropTypes.func,
  onSetPassword: PropTypes.func,
};

export default Login_form;
