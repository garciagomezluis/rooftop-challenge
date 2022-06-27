import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { chakra, HStack, Spacer, Text } from "@chakra-ui/react";
import { Blocks } from "../src/Blocks";
import { Login } from "../src/Login";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Rooftop challenge</title>
        <meta name="description" content="Rooftop challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <chakra.main
        bg="#e1e1e1"
        w="75%"
        margin="0 auto"
        p="5"
        border="3px solid"
        borderColor="pink.500"
        borderRadius="md"
        boxShadow="0px 0px 20px 0 #D53F8C"
        minH="500px"
        // h="80%"
      >
        <HStack>
          <Spacer />
          <Login />
        </HStack>
        {!(session && session.user) && (
          <Text>
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
