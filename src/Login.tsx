import { Box, Button, HStack } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react"

export const Login = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <HStack>
        <Box>Signed in as {session.user.email}</Box>
        <Button onClick={() => signOut()} colorScheme="pink">Sign out</Button>
      </HStack>
    );
  }

  return (
    <HStack>
      <Button onClick={() => signIn("google")} colorScheme="pink">Sign in</Button>
    </HStack>
  );
};
