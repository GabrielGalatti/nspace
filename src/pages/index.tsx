import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import { CreatedBy } from "../components/CreatedBy";
import { BoxDarkOpacity } from "../components/BoxDarkOpacity";
import { MenuButton, MenuButtonProps } from "../components/MenuButton";

const Home: NextPage = () => {
  const menuButtons: MenuButtonProps[] = [
    { label: "New Game", to: "/battle" },
    { label: "Rules", to: "/rules" },
  ];

  return (
    <Box
      w="100vw"
      h="100vh"
      bgImg="url('/images/bg1.jpg')"
      backgroundSize="cover"
      position="relative"
      justifyContent="center"
      alignItems="end"
      display="flex"
    >
      <Flex position="absolute" bottom="0" left="0" width="100%" height="60%">
        <BoxDarkOpacity />
      </Flex>
      <Flex position="absolute" bottom="5" left="5">
        <CreatedBy />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        paddingBottom="15%"
        zIndex={1000}
      >
        {menuButtons.map((menuButton) => (
          <MenuButton {...menuButton} key={menuButton.to} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
