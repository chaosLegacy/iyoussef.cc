import { FadeContainer, popUp } from "@data/content/FramerMotionVariants";
import { motion } from "framer-motion";
// import { useDarkMode } from "@context/darkModeContext";
import * as WindowsAnimation from "@lib/windowsAnimation";
import skills from "@data/content/skillsData";
import React from "react";
import { HomeHeading } from "@app/home/page";
import { Box, Grid, Text } from "@chakra-ui/react";

export default function SkillSection() {
    // const { isDarkMode } = useDarkMode();

    return (
        <Box>
            <HomeHeading title="My Top Skills" />
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
            >
                <Grid templateColumns="repeat(3, 1fr)" gap={4} my={10}>
                    {skills.map((skill, index) => {
                        const Icon = skill.Icon;

                        return (
                            <motion.div
                                variants={popUp}
                                key={index}
                                title={skill.name}
                                onMouseMove={(e) => WindowsAnimation.showHoverAnimation(e, true)}
                                onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
                                className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
                            >
                                <Box
                                    className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100"
                                    w="8"
                                    h="8"
                                >
                                    {/* @ts-ignore */}
                                    <Icon w="full" h="full" />
                                </Box>
                                <Text
                                    className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base"
                                >
                                    {skill.name}
                                </Text>
                            </motion.div>
                        );
                    })}
                </Grid>
            </motion.div>
        </Box>
    );
}