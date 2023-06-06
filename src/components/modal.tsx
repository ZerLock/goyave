import {
  Modal as UIModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  CTA?: JSX.Element;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  CTA,
}: ModalProps): JSX.Element => (
  <UIModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent w="75%">
      <ModalHeader
        fontSize={{ base: "16px", "3xs": "16px", xs: "22px" }}
        textAlign="center"
      >
        {title}
      </ModalHeader>
      <ModalBody mt="16px" mb="32px">
        {children}
      </ModalBody>

      <ModalFooter flexDirection="row" alignItems="arround" gap="2">
        <Button w="90%" colorScheme="teal" variant="outline" onClick={onClose}>
          Close
        </Button>
        {CTA}
      </ModalFooter>
    </ModalContent>
  </UIModal>
);

export default Modal;
