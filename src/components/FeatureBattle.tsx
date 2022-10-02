import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type Feature = {
  title: string;
  value: string;
};

export type FeatureBattleProps = {
  title: string;
  winner: "lft" | "rgt" | "draw";
  lft: Feature;
  rgt: Feature;
};

const Feature = ({ title, value }: Feature) => (
  <Flex
    bgColor="white"
    flex={1}
    borderRadius="30px"
    flexDir="column"
    py="10px"
    px="15"
  >
    <Text fontSize="14px" fontWeight="bold" mb="10px" textAlign="center">
      {title}
    </Text>
    <Text fontSize="12px">{value}</Text>
  </Flex>
);

export const FeatureBattle = ({
  lft,
  rgt,
  title,
  winner,
}: FeatureBattleProps) => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center" mb="20px">
      <Feature {...lft} />
      <Flex flex={1} justifyContent="center">
        <Text fontSize="16px" fontWeight="bold" mb="10px" color="white">
          {title}
        </Text>
      </Flex>
      <Feature {...rgt} />
    </Flex>
  );
};
