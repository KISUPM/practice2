import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, VStack, Button } from "@chakra-ui/react";

export default function Prepare() {
  const navigate = useNavigate();
  return (
    <Box>
      <Center>
        <VStack
          h="100vh"
          alignItems={"center"}
          justifyContent={"center"}
          w="30vw"
        >
          <Button
            w="100%"
            colorScheme="teal"
            onClick={() => {
              navigate("./hirangana");
            }}
          >
            Practice Hirangana
          </Button>
          <Button
            w="100%"
            colorScheme="teal"
            onClick={() => {
              navigate("./katakana");
            }}
          >
            Practice Katakana
          </Button>
          <Button
            w="100%"
            colorScheme="teal"
            onClick={() => {
              navigate("./mixed");
            }}
          >
            Mixed
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}
