import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { FiDownload } from "react-icons/fi";
import { getAuthorData } from "@data/content/user";
import { chakra, shouldForwardProp, Text, useColorModeValue, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import { ChakraNextAvatar } from "@components/image/Avatar";
import { Icon } from "@chakra-ui/icons";

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = () => {
    const textColor = useColorModeValue('brandScheme.900', 'white');

    const { image, name, words } = getAuthorData();
    const [text] = useTypewriter({
        words,
        // words: heroData.typewriter,
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 100,
    });


    return (
        <Flex flexDirection='column' alignItems="center" justifyContent="center" overflow='hidden' h='100vh'>
            <BackgroundCircles />
            <ChakraBox
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1],
                    opacity: [0, 1],
                    rotate: 360,
                }}
                //@ts-ignore
                transition={{ type: "spring", damping: 20, duration: 1, delay: 0 }}
                viewport={{ once: true }}
            >
                <ChakraNextAvatar src={image} height={40} width={40} alt={`${name}'s Pic`} />
            </ChakraBox>
            <Text
                color={textColor}
                fontWeight='bold'
                mt='15px'
                fontSize="md"
                textTransform="uppercase"
                pb="2"
                letterSpacing="15px"
                zIndex="20"
                cursor="default"
            >
                {name}
            </Text>
            <Text
                color={textColor}
                _hover={{ hover: { color: '#F7AB0A' } }}
                transition="opacity 0.2s ease-out"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight='bold'
            >
                {text}
                <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
            </Text>
            <ChakraLink
                href="https://read.cv/chaoslegacy"
                target="_blank"
                rel="noopener noreferrer"
                bg='transparent'
                border='1px solid'
                borderColor='#000'
                rounded={'md'}
                outline={'none'}
                _focus={{ cursor: 'pointer' }}
                _hover={{ bg: 'white' }}
                paddingY={2}
                paddingX={6}
                mt={18}
                zIndex="20"                    >
                <Flex align="center" gap={2}>
                    <Icon as={FiDownload} />
                    <Text>Resume</Text>
                </Flex>
            </ChakraLink>
   
         </Flex>
       
    );
};

export default Hero;