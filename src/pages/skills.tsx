import React, { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";

import { BoxDarkOpacity } from "../components/BoxDarkOpacity";
import { PageTitle } from "../components/PageTitle";
import { MenuButton } from "../components/MenuButton";

import { SkillCategory } from "../types/SkillCategory";

import { firestore } from "../config";

import useFirebaseQuery from "../hooks/useFirebaseQuery";

const Skills: NextPage = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const { getAllDocuments } = useFirebaseQuery<SkillCategory>(
    "skills_categories",
    firestore
  );

  const getSkillsCategories = useCallback(async () => {
    const categories = await getAllDocuments();
    setSkillCategories(categories || []);
  }, []);

  useEffect(() => {
    getSkillsCategories();
  }, [getSkillsCategories]);

  return (
    <Box w="100vw" h="100vh" bgColor="#060126" position="relative">
      <Box
        w="100%"
        h="30%"
        bg="url('/images/lab.jpg')"
        backgroundSize="cover"
        filter="drop-shadow(0px 5px 8px rgba(255, 255, 255, 0.08))"
        bgPos="0% 55%"
      ></Box>
      <Flex position="absolute" bottom="0" left="0" width="100%" height="60%">
        <BoxDarkOpacity />
      </Flex>
      <Flex py="20px" w="100%" justifyContent="center">
        <PageTitle title="Skills" />
      </Flex>
      <Flex pos="absolute" right="100px" bottom="40px">
        <MenuButton label="Next" to="/battle" />
      </Flex>
    </Box>
  );
};

export default Skills;
