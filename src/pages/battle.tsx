import React from "react";
import { NextPage } from "next";
import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar, { genConfig } from "react-nice-avatar";

import { PageTitle } from "../components/PageTitle";
import { FeatureBattle } from "../components/FeatureBattle";

const CONFIG_A = {
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "big",
  eyeStyle: "oval",
  noseStyle: "long",
  mouthStyle: "laugh",
  shirtStyle: "polo",
  glassesStyle: "none",
  hairColor: "#000",
  hairStyle: "mohawk",
  hatStyle: "none",
  hatColor: "#F48150",
  eyeBrowStyle: "up",
  shirtColor: "#9287FF",
  bgColor: "#F4D150",
};

const CONFIG_B = {
  sex: "woman",
  faceColor: "#AC6651",
  earSize: "small",
  eyeStyle: "circle",
  noseStyle: "long",
  mouthStyle: "peace",
  shirtStyle: "polo",
  glassesStyle: "none",
  hairColor: "#fff",
  hairStyle: "womanLong",
  hatStyle: "none",
  hatColor: "#D2EFF3",
  eyeBrowStyle: "upWoman",
  shirtColor: "#F4D150",
  bgColor: "#9287FF",
};

const Battle: NextPage = () => {
  const battler_A = genConfig(CONFIG_A as any);
  const battler_B = genConfig(CONFIG_B as any);

  const faseFeaturesMock: { [key: string]: string } = {
    Temperature: "HIGH",
    "Oxygen Level": "0",
    "Food Level": "0",
    "Water Level": "0",
    Gravity: "2.5x Earth",
  };

  return (
    <Flex w="100vw" h="100vh" bgColor="#060126">
      <Flex h="100%" left="0" flex={2} py="50px" flexDir="column" px="20px">
        <Flex w="100%" justifyContent="space-around" mb="60px">
          <Avatar style={{ width: "8rem", height: "8rem" }} {...battler_A} />
          <PageTitle title="VS" />
          <Avatar style={{ width: "8rem", height: "8rem" }} {...battler_B} />
        </Flex>
        <Flex w="100%" flexDir="column" overflowY="auto">
          {Object.keys(faseFeaturesMock).map((key) => (
            <FeatureBattle
              winner="draw"
              title={key}
              lft={{
                title: "Nome da Habilidade",
                value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              }}
              rgt={{
                title: "Nome da Habilidade",
                value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              }}
              key={`feature-${key}`}
            />
          ))}
        </Flex>
      </Flex>
      <Flex
        height="100%"
        bg="url('/images/fase1.jpg')"
        backgroundSize="cover"
        bgPos="0% 55%"
        flex={3}
        position="relative"
      >
        <Box
          border="2px solid #110440"
          width="250px"
          borderRadius={20}
          bgColor="rgba(0, 0, 0, 0.5)"
          pos="absolute"
          top="20px"
          right="20px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p="20px"
        >
          <Text color="#fff" fontSize="18px" fontWeight="bold" mb="10px">
            Features
          </Text>
          {Object.keys(faseFeaturesMock).map((key) => (
            <Flex mb="5px" key={key}>
              <Text color="#fff" fontSize="14px" fontWeight="bold" pr="8px">
                {key}:
              </Text>
              <Text color="#fff" fontSize="14px">
                {faseFeaturesMock[key]}
              </Text>
            </Flex>
          ))}
        </Box>
        <Box
          border="2px solid #110440"
          width="400px"
          minH="100px"
          borderRadius={20}
          bgColor="rgba(0, 0, 0, 0.5)"
          pos="absolute"
          bottom="20px"
          right="20px"
          display="flex"
          justifyContent="center"
          px="20px"
        >
          <PageTitle title="Planeta Júpiter" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Battle;
