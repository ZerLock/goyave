import _ from "lodash";
import types from "typescript-is";
import { useState } from "react";
import {
  HStack,
  VStack,
  Center,
  Link,
  StackDivider,
  Text,
  Button,
  IconButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import MenuButton from "components/menuButton";
import Modal from "components/modal";
import type { CreateRoomParams } from "models";
import axios from "axios";

const Home = (): JSX.Element => {
  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [roomPassword, setRoomPassword] = useState<string>("");
  const [numPlayers, setNumPlayers] = useState<number>(3);

  const numberOfPlayers = ["3", "4", "5", "6"];

  const createRoom = async () => {
    const params = types.assertType<CreateRoomParams>({
      name,
      password: roomPassword,
      number_of_plaers: numPlayers,
    });
    await axios.post("/api/createRoom", params);
  };

  return (
    <>
      <Center h="100vh">
        <HStack spacing="150px">
          <MenuButton text="Create room" onClick={onOpenCreate} />
          <MenuButton text="Join room" onClick={() => {}} />
        </HStack>

        {/* Help */}
        <IconButton
          aria-label="help"
          pos="absolute"
          top="10px"
          right="10px"
          colorScheme="teal"
          icon={<QuestionOutlineIcon />}
          onClick={() => {}}
        />

        {/* Footer */}
        <HStack
          pos="absolute"
          bottom="2"
          spacing="3"
          divider={<StackDivider borderColor="gray.500" />}
        >
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Text>Copyright © 2022 goyave, All rights reserved.</Text>
        </HStack>
      </Center>

      {/* Create room modal */}
      <Modal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        title="Create room"
        CTA={
          <Button colorScheme="teal" w="90%" onClick={async () => createRoom()}>
            Create
          </Button>
        }
      >
        <>
          <VStack spacing="10px">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="your name"
                variant="outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Room password</FormLabel>
              <Input
                placeholder="room password"
                variant="outline"
                value={roomPassword}
                onChange={(e) => setRoomPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Number of players</FormLabel>
              <Select
                value={numPlayers}
                onChange={(e) => setNumPlayers(_.toInteger(e.target.value))}
              >
                {numberOfPlayers.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </VStack>
        </>
      </Modal>
    </>
  );
};

export default Home;
