import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import {
  Button,
  chakra,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Blocks } from "../src/Blocks";
import { Login } from "../src/Login";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Rooftop challenge</title>
        <meta name="description" content="Rooftop challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <chakra.main
        margin="0 auto"
        border="3px solid"
        borderColor="pink.500"
        borderRadius="md"
        boxShadow="0px 0px 20px 0 #D53F8C"
        minH="600px"
        w={{md: "75%"}}
      >
        {session && session.user && <Text bg="pink.500" textAlign="center" color="white">{session.user.email}</Text>}
        <HStack p="5">
          <Spacer />
          <Login />
          <IconButton
            aria-label={colorMode === "light" ? "toggle dark" : "toggle light"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            colorScheme="pink"
          />
        </HStack>
        {!(session && session.user) && (
          <Text p="5">
            Rooftop challenge - Sign in (with google) to get your sorted blocks.
          </Text>
        )}
        {session && session.user && <Blocks />}
      </chakra.main>

      <footer></footer>
    </>
  );
};

export default Home;
