import { useState } from "react";
import Footer from "./Footer";
import {
  FormControl,
  Card,
  CardBody,
  Input,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";

const Reset_password_form = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="div-main">
      <div className="div-form-container">
        <div className="div-form">
          <Card>
            <CardBody>
              <FormControl>
                <Stack spacing={7}>
                  <Text
                    fontSize={["1.6rem", "1.9rem", "1.8rem"]}
                    fontWeight="800"
                    as="h4"
                    size="md"
                    textAlign="center"
                    mb="10px"
                    color="color.300"
                  >
                    Reset Password
                  </Text>
                  <Input type="email" placeholder="Enter email" />
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
                    Rest Password
                  </Button>
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

export default Reset_password_form;
