import { useState } from "react";
import Footer from "./Footer";
import {
  FormControl,
  Card,
  CardBody,
  Input,
  Button,
  Stack,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const SignUp_form = (props: any) => {
  const [show, setShow] = useState(false);

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
                    Sign up
                  </Text>
                  <Input type="email" placeholder="Enter email" />
                  <Input type="email" placeholder="Enter username" />
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                  />
                  <Button bg="color.100" color="white">
                    Sign up
                  </Button>
                  <Box
                    color="color.200"
                    display="flex"
                    justifyContent="end"
                    gap="5px"
                    fontSize="14px"
                  >
                    <Text>Already have an account?</Text>
                    <Link
                      onClick={props.onClick}
                      color="blue"
                      fontWeight=""
                      textAlign="end"
                    >
                      Login
                    </Link>
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

SignUp_form.propTypes = {
  onClick: PropTypes.func,
};

export default SignUp_form;
