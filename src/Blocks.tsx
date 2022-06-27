import { Box, HStack, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import useSWR from "swr";
import LootieLoader from "./../public/lootieLoader.json";
import LootieSad from "./../public/lootieSad.json";
import Gravatar from "react-gravatar";

const fetcher = async (...args: any[]) => {
  // @ts-ignore
  const response = await fetch(...args);
  const content = await response.json();
  const status = response.status;

  return { content, status };
};

export const Blocks = () => {
  const { data: { content, status } = { content: null, status: null }, error } =
    useSWR("/api/blocks", fetcher);

  if (error || (status && status !== 200))
    return (
      <Box boxSize="300px" m="0 auto">
        <Lottie animationData={LootieSad} loop={true} />
        <Text textAlign="center" fontSize="15">
          Failed to load: {JSON.stringify(error || content.data)}
        </Text>
      </Box>
    );

  if (!content)
    return (
      <Box boxSize="300px" m="0 auto">
        <Lottie animationData={LootieLoader} loop={true} />
        <Text textAlign="center" fontSize="15">
          Sorting your words...
        </Text>
      </Box>
    );

  return content.data.map((block: string) => (
    <HStack
      key={Math.random().toString().substring(2)}
      bg="pink.500"
      fontWeight="bold"
      color="white"
      mt="5"
    >
      <Gravatar email={block} size={50} />
      <Text px="5" textAlign="center" w="full" noOfLines={1}>
        {block}
      </Text>
    </HStack>
  ));
};
