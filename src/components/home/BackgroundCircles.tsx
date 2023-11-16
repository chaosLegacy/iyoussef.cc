import React from "react";
import { isValidMotionProp, motion } from "framer-motion";
import { chakra, keyframes, shouldForwardProp } from "@chakra-ui/react";

const ChakraMotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const animationKeyframes = keyframes`
0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Circle = (
    {
        borderColor,
        size,
        mt,
        ml,
        delay }:
        {
            borderColor: string,
            size: number,
            mt: number,
            ml: number,
            delay: number
        }) => (
    <ChakraMotionBox
        pos="absolute"
        border={`0.2px solid ${borderColor}`}
        borderRadius="50%"
        height={`${size}px`}
        width={`${size}px`}
        left={0}
        right={0}
        mt={`${mt}px`}
        ml={`${ml}px`}
        animate={{
            scale: [0, 2, 1.5, 2.5, 3, 2.5],
            opacity: [0, 0.3, 0.1, 1, 0.3, 5],
            borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            rotate: 180,
        }}
        transition={{
            delay: delay,
            type: "spring",
            duration: 4,
            //@ts-ignore
            repeat: Infinity,
            repeatType: "mirror",
        }}
        // zIndex={zIndex}
    />
);

const BackgroundCircles = () => {
    const circleData = [
        { borderColor: "#333333", size: 100, mt: 20, ml: -30, delay: 0.1 },
        { borderColor: "#F7AB0A", size: 200, mt: -20, ml: -75, delay: 0.4 },
        { borderColor: "#333333", size: 300, mt: -40, ml: -100, delay: 0.2 },
        { borderColor: "#F7AB0A", size: 400, mt: -80, ml: -125, delay: 0.3 },
        { borderColor: "#F7AB0A", size: 500, mt: -100, ml: -200, delay: 0.1 },
    ];
    return (
        <ChakraMotionBox
            pos="absolute"
            left='25%'
            top='25%'
            w='100%'
            h="100vh"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: [0, 1],
                opacity: [0, 1],
                rotate: 360,
            }}
            transition={{
                delay: 0,
                type: "spring",
                duration: 5,
                //@ts-ignore
                repeat: Infinity,
                repeatType: "mirror",
            }}
        >
            {circleData.map((circle, index) => (
                <Circle key={index} {...circle} />
            ))}
        </ChakraMotionBox>
    );
};

export default BackgroundCircles;
