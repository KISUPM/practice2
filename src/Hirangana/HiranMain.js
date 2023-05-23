/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Grid,
  Heading,
  Center,
  VStack,
} from "@chakra-ui/react";

import { AllHiran, AllReadHiran, AllWriteHiran } from "../Data/All";

export default function HiranMain() {
  const [randomAlp, setRandomAlp] = useState("Click 'Start' Button");
  const [answer, setAnswer] = useState([]);
  const [isStart, setIsStart] = useState(false);

  const cloneAlp = AllWriteHiran;
  const choice = AllReadHiran;

  function randomPop() {
    setIsStart(true);
    // console.clear();
    const randomIndex = Math.floor(Math.random() * cloneAlp.length);
    const pop = cloneAlp[randomIndex];
    cloneAlp.splice(randomIndex, 1);
    // console.log(cloneAlp)
    setRandomAlp(pop);
  }

  function selectChoice(event) {
    console.log(event.target.innerHTML);
    event.target.style.display = "none";
  }

  return (
    <Box color="white">
      <Box p="20px" >
        <VStack>
          <Heading as="h1">{randomAlp}</Heading>
          {!isStart && (
            <Button
              colorScheme="teal"
              onClick={() => {
                randomPop(cloneAlp);
              }}
              isDisabled={cloneAlp.length === 0}
            >
              Start
            </Button>
          )}
        </VStack>
      </Box>
      <Box>
        <Grid templateColumns={"repeat(10,1fr)"} fontSize={"1rem"} gap={"20px"}>
          {choice.map((i, index) => {
            return (
              <Button
                onClick={() => {
                  selectChoice();
                }}
                colorScheme="teal"
                key={index}
              >
                {i}
              </Button>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
