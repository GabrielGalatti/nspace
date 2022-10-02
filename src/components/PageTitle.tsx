import React from "react";
import { Text } from "@chakra-ui/react";

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => (
  <Text fontFamily="Gemunu Libre" color="#FF8930" fontSize="64px">
    {title}
  </Text>
);
