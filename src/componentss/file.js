import React from "react";
import { Box, Image, Text, VStack, Center, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from "@chakra-ui/react";

function FlipCard({ title, imageUrl, notes, undertitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  const splitIntoParagraphs = (text) => {
    const sentences = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += 4) {
      const paragraph = sentences.slice(i, i + 4).join(' ');
      paragraphs.push(paragraph);
    }

    return paragraphs;
  };

  const paragraphs = splitIntoParagraphs(notes).map((paragraph, index) => (
    <Text key={index} fontFamily="Poppins" fontWeight="normal" mb={2}>
      {paragraph}
    </Text>
  ));

  return (
    <>
      <Box w="200px" h="300px" bg="white" shadow="md" borderRadius="md" position="relative" cursor="pointer" onClick={handleButtonClick} transition="transform 0.5s ease, filter 0.5s ease" _hover={{ transform: "scale(1.1)" }}>
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
          <ModalBody style={{ maxHeight: "60vh", overflowY: "auto", padding: "1rem" }}>
            {paragraphs}
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
