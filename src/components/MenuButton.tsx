import React from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export type MenuButtonProps = {
  label: string;
  to: `/${string}`;
};

export const MenuButton = ({ label, to }: MenuButtonProps) => (
  <NextLink href={to}>
    <Link
      color="white"
      textShadow="0px 4px 4px rgba(255, 255, 255, 0.5)"
      fontSize="35px"
    >
      {label}
    </Link>
  </NextLink>
);
