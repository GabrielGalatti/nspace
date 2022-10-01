import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const CreatedBy = () => (
  <Flex flexDir="row">
    <Text fontSize="24px" color="white">
      Created by
    </Text>
    <Text fontWeight="bold" fontSize="24px" color="white" pl="8px">
      NSpace
    </Text>
  </Flex>
);
