import { Text, Spinner, Center, Button, VStack } from '@chakra-ui/react';
import db from 'utils/database';

const Home = (): JSX.Element => {

    const setDoc = async () => {
        db.setDoc('test/xxx', { text: 'hello world!' });
    }

    return (
        <>
            <Center h="100vh">
                <VStack>
                    <Text>Let's start your development</Text>
                    <Spinner w="50px" h="50px" />
                    <Button onClick={setDoc}>SetDoc</Button>
                </VStack>
            </Center>
        </>
    );
};

export default Home;
