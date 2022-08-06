import React , {useState} from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center ,
  Text
} from "@chakra-ui/react";
import { AiOutlineMenu , AiFillAmazonSquare } from "react-icons/ai";


export default function NavBar () {
  
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              title="Home Page"
              display="flex"
              alignItems="center"
            >
                <chakra.h1 fontSize = "3xl">
                  <AiFillAmazonSquare />
                </chakra.h1>
              <VisuallyHidden>Epic Amazon Training</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="lg" fontWeight="medium" ml="2" pt = {'0.5'}>
            Epic Amazon Training
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Curriculum</Button>
              <Button variant="ghost">Motive</Button>
              <Button variant="ghost">Prerequisite</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            <Button colorScheme='whiteAlpha' color={'white'} size="sm">
              Get Started
            </Button>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <Menu closeOnSelect={true}>
              <MenuButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                px = {3}
              ><AiOutlineMenu /></MenuButton>
                <Center>
                <MenuList bgColor={'gray.800'} mt = {'2'}>
                 
                 <MenuItem _focus={false} variant="ghost">Curriculum</MenuItem>
                <MenuItem variant="ghost">
                  Prerequisite
                </MenuItem>

                <MenuItem variant="ghost">
                Motive
                </MenuItem>
                
                <MenuItem variant="ghost">
                Pricing
                </MenuItem>
                
                <MenuItem variant="ghost">
                Sign in
              </MenuItem>

                </MenuList> 
              </Center>
              </Menu>
            </Box> 
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
