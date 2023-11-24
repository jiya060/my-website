import { Box, Image, Text, VStack, Center, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

function FlipCard({ title, imageUrl, notes, undertitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButtonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    onOpen();
    setButtonVisible(false);
  };

  const handleClose = () => {
    onClose();
    setButtonVisible(true);
  };

  return (
    <>
      <Box
        w="200px"
        h="300px"
        bg="white"
        shadow="md"
        borderRadius="md"
        position="relative"
        cursor="pointer"
        onClick={handleButtonClick}
        transition="transform 0.5s ease, filter 0.5s ease"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <VStack h="100%" align="center" justify="center" spacing={4}>
          <Center>
            <Box w="100%" h="250px">
              <Image boxSize="100%" objectFit="cover" src={imageUrl} />
            </Box>
          </Center>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="Poppins" textAlign="center">
            {title}
            <Text fontSize="sm" fontFamily="Poppins" fontWeight="normal" mt={1}>
              {undertitle}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Text fontFamily="Poppins" fontWeight="normal">
              {notes}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FlipCard;
