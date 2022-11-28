import { Button } from "@chakra-ui/react";

interface MenuButtonProps {
  text: string;
  onClick: () => void;
}

const MenuButton = ({ text, onClick }: MenuButtonProps): JSX.Element => (
  <Button
    colorScheme="teal"
    variant="outline"
    w="100px"
    h="100px"
    p="20"
    onClick={onClick}
  >
    {text}
  </Button>
);

export default MenuButton;
