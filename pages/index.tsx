import { Text, Spinner, Center, VStack } from "@chakra-ui/react";

const Home = (): JSX.Element => (
  <>
    <Center h="100vh">
      <VStack>
        <Text>Let's start your development</Text>
        <Spinner w="50px" h="50px" />
      </VStack>
    </Center>
  </>
);

export default Home;
