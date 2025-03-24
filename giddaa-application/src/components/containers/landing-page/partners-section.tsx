"use client"
import {Heading, Text, Box, Center, Button, Flex, Image} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";

const categories = [
    "Government",
    "Property Developers",
    "Property Managers",
    "Financial Institutions",
    "Non-Governmental Organizations",
];
// const ChakraNextImage = chakra(Image, {
//     shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
// })


export default function PartnersSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const checkScroll = () => {
            if (!scrollContainerRef.current) return

            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }

        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScroll)
            // Initial check
            checkScroll()

            // Check on window resize
            window.addEventListener("resize", checkScroll)

            return () => {
                scrollContainer.removeEventListener("scroll", checkScroll)
                window.removeEventListener("resize", checkScroll)
            }
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return

        const scrollAmount = 300
        const currentScroll = scrollContainerRef.current.scrollLeft

        scrollContainerRef.current.scrollTo({
            left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <Box textAlign="center" py={10}>
            {/* Section Title */}
            <Center flexDirection="column" textAlign="center" mt={6}>
                <Heading as="h2" size="lg" color="#335F32" fontWeight="bold" mt="20px" position="relative" display="inline-block">
                    Our Partners
                    <Box
                        borderBottom="2px solid #335F32"
                        width="60px"
                        position="absolute"
                        bottom="-6px"
                        left="50%"
                        transform="translateX(-50%)"
                    />
                </Heading>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} color="#000000" mt="12px">
                    Organizations we’ve partnered with to make real estate in <br/> Nigeria a pleasant experience for all.
                </Text>
            </Center>

            <Flex justify="center" gap={2} mt='2%' flexWrap="wrap">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        h='30px'
                        border='1px solid'
                        variant={index === 0 ? "solid" : "outline"}
                        colorScheme="green"
                        borderRadius="50px"
                        fontSize="10px"
                        fontWeight={index === 0 ? "500px" : "normal"}
                        bg={index === 0 ? "#335F32" : "white"}
                        color={index === 0 ? "white" : "#335F32"}
                        borderColor="#335F32"
                        _hover={{ bg: index === 0 ? "#335F32" : "#f0f0f0" }}
                    >
                        {category}
                    </Button>
                ))}
            </Flex>

            <Flex align="center" justify="center" mt={10}>
                {/* Left Scroll Button */}
                {showLeftArrow && (
                    <Button onClick={() => scroll("left")} borderRadius="full" bg="white" border="1px solid #335F32">
                        ⬅️
                    </Button>
                )}

                {/* Scrollable Partner Logos */}
                <Flex
                    ref={scrollContainerRef}
                    overflowX="auto"
                    whiteSpace="nowrap"
                    maxW="80%"
                    px={4}
                    css={{
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                    }}
                >
                    {[...Array(9)].map((_, index) => (
                        <Box
                            key={index}
                            w={{ base: "50px", md: "70px" }}
                            h={{ base: "50px", md: "70px" }}
                            bg="gray.300"
                            borderRadius="full"
                            m={2}
                        />
                    ))}
                </Flex>

                {/* Right Scroll Button */}
                {showRightArrow && (
                    <Button onClick={() => scroll("right")} borderRadius="full" bg="white" border="1px solid #335F32">
                        ➡️
                    </Button>
                )}
            </Flex>

            {/*<Flex justify="center" gap={6} mt={10} flexWrap="wrap">*/}
            {/*    {[...Array(9)].map((_, index) => (*/}
            {/*        <Box*/}
            {/*            key={index}*/}
            {/*            w={{ base: "50px", md: "70px" }}*/}
            {/*            h={{ base: "50px", md: "70px" }}*/}
            {/*            bg="gray.300"*/}
            {/*            borderRadius="full"*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</Flex>*/}

            <Center as="section" mt='4px'>
                <Box maxW="7xl" mx="auto">
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight={700}
                        textAlign="center"
                        mt='4%'
                        color="#E4E4E4"
                    >
                        Over 50 Partners
                    </Heading>
                </Box>
            </Center>
            <Button
                colorScheme="green"
                background="#335F32"
                _hover={{ background: "#2A4D27" }}
                borderRadius='100px'
                border='none'
                color='#fff'
                mt='2%'
            >
                View All Partners
                <Image src="/img/arrowDown.png" alt="arrowDown" width="25px" height="25px" ml='6px'/>
            </Button>
        </Box>
    );
}
