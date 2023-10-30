import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      padding={4}
      backgroundColor="white"
      borderRadius="md"
      boxShadow='1px 3px rgba(0, 0, 0, 0.4)'>
      <Image src={ImageSrc} alt={title} objectFit='cover' maxH="200" />
      <Heading as='h2' color='black' size='lg'>{title}</Heading>
      <Text color="red">{description}</Text>
      <HStack spacing={2}>
        <Text color="#000">More...</Text>
      <FontAwesomeIcon icon={faArrowRight} color='#000' size="lg" />
      </HStack>
    </VStack>
  );
};

export default Card;
