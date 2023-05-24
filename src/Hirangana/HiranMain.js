/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
  const [randomAlp, setRandomAlp] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [count, setCount] = useState(0);
  const [allAnswer, setAllAnswer] = useState([]);
  const [done, setDone] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState("block");

  let allWrite = AllWriteHiran;
  let allRead = AllReadHiran;

  const gettingStart = () => {
    setRandomAlp("");
    setIsStart(false);
    setCount(0);
    setAllAnswer([]);
    setDone(false);
    setButtonDisplay("block");
    allWrite = AllWriteHiran;
    allRead = AllReadHiran;
    randomPop();
    setIsStart(true);
  };

  function randomPop() {
    const randomIndex = Math.floor(Math.random() * allWrite.length);
    const pop = allWrite[randomIndex];
    allWrite.splice(randomIndex, 1);
    // console.log(allWrite);
    setRandomAlp(pop);
    setCount(count + 1);
  }

  function selectAnswer(event) {
    // console.log(event.target.innerHTML);
    const selected = event.target.innerHTML;
    event.target.style.display = "none";
    const answer = [randomAlp, selected];
    // console.log(count, answer);
    setAllAnswer([...allAnswer, answer]);
    randomPop();
  }
  useEffect(() => {
    if (count - 1 === 46) {
      // console.log(allAnswer);
      setDone(true);
    }
  }, [allAnswer, count]);
  return (
    <Box
      color="white"
      userSelect={"none"}
      minH="100vh"
      w="100vw"
      position="relative"
    >
      <Button
        position="absolute"
        top="0"
        left="0"
        colorScheme={"red"}
        onClick={gettingStart}
      >
        restart
      </Button>
      {!isStart && (
        <Button
          onClick={gettingStart}
          colorScheme={"green"}
          position="absolute"
          top="50%"
          left="50%"
          transform={"translate(-50%,-50%)"}
        >
          Click To Start
        </Button>
      )}
      {/* <Button onClick={randomPop} isDisabled={count === 46} colorScheme={"red"}>
        Random
      </Button> */}
      <Box
        w="100%"
        p="50px"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"5rem"} fontWeight={"bold"}>
          {randomAlp}
        </Text>
      </Box>
      {isStart && (
        <Box
          // w="100%"
          p="20px"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          // border="1px solid white"
        >
          <Grid
            templateColumns={{
              "6s": "repeat(5,1fr)",
              "5s": "repeat(5,1fr)",
              "4s": "repeat(5,1fr)",
              "3s": "repeat(5,1fr)",
              "2s": "repeat(5,1fr)",
              "1s": "repeat(5,1fr)",
              s: "repeat(5,1fr)",
              m: "repeat(5,1fr)",
              l: "repeat(10,1fr)",
              "1l": "repeat(10,1fr)",
              "2l": "repeat(10,1fr)",
              "3l": "repeat(10,1fr)",
              "4l": "repeat(10,1fr)",
              "5l": "repeat(10,1fr)",
              "6l": "repeat(10,1fr)",
            }}
            gap={"20px"}
          >
            {allRead.map((i, index) => (
              <Button
                key={index}
                onClick={selectAnswer}
                colorScheme={"telegram"}
                display={buttonDisplay}
              >
                {i}
              </Button>
            ))}
          </Grid>
        </Box>
      )}
      {isStart && done && (
        <Box>
          <Heading as="h1" w="100%" textAlign={"center"}>
            Check
          </Heading>
          <Grid
            templateColumns={{
              "6s": "repeat(5,1fr)",
              "5s": "repeat(5,1fr)",
              "4s": "repeat(5,1fr)",
              "3s": "repeat(5,1fr)",
              "2s": "repeat(5,1fr)",
              "1s": "repeat(5,1fr)",
              s: "repeat(5,1fr)",
              m: "repeat(5,1fr)",
              l: "repeat(10,1fr)",
              "1l": "repeat(10,1fr)",
              "2l": "repeat(10,1fr)",
              "3l": "repeat(10,1fr)",
              "4l": "repeat(10,1fr)",
              "5l": "repeat(10,1fr)",
              "6l": "repeat(10,1fr)",
            }}
            gap={"20px"}
            p="20px"
            w="100%"
            border="1px solid red"
          >
            {allAnswer.map((i, index) => {
              return (
                <Text
                  key={index}
                  border={`1px solid ${
                    AllHiran[i[0]] === i[1] ? "green" : "red"
                  }`}
                  w="100%"
                  textAlign={"center"}
                  as="p"
                >
                  {i[0]}:{i[1]}
                  {AllHiran[i[0]] === i[1]
                    ? ` ✓`
                    : ` → ${i[0]} = ${AllHiran[i[0]]}`}
                </Text>
              );
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
