"use client"

import { Box, Button, Flex, Grid, Heading, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { MdArrowBack, MdEdit, MdDelete, MdShare, MdAdd, MdInfoOutline } from "react-icons/md"

type ViewEstatePageProps = {
    estateId: string | null
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
}

// Mock estate data
const mockEstate = {
    id: "1",
    name: "The View Estate",
    state: "Federal Capital Territory",
    city: "Abuja",
    address: "No 25 Kwame Nkrumah, Asokoro, Abuja",
    landmark: "NNPC Fueling Station",
    landSize: "2 Hectares",
    completionStatus: "Completed",
    videoUrl: "grdcss.youtube.com",
    floors: "2 Floors",
    description:
        "The property is a really nice and beautiful place. We think you should buy it because it is the best. They you could ever buy in your life for real just buy this house. It will be good for...",
    images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
    ],
}

export default function ViewEstatePage({ estateId, onNavigate }: ViewEstatePageProps) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Box p={4} maxW="1200px" mx="auto">
            {/* Header */}
            <Flex
                align="center"
                justify="space-between"
                mb={6}
                direction={{ base: "column", md: "row" }}
                gap={{ base: 4, md: 0 }}
            >
                <Flex align="center">
                    <Button leftIcon={<Icon as={MdArrowBack} />} variant="ghost" onClick={() => onNavigate("properties")}>
                        Back
                    </Button>
                    <Heading size="md" ml={4}>
                        The View Estate
                    </Heading>
                </Flex>

                <Button colorScheme="green" onClick={() => {}}>
                    Update Estate
                </Button>
            </Flex>

            {/* Breadcrumb */}
            <Flex fontSize="sm" color="gray.600" mb={6}>
                <Text>Estates</Text>
                <Text mx={2}>&gt;</Text>
                <Text fontWeight="medium">The View Estate</Text>
            </Flex>

            {/* Tabs */}
            <Tabs mb={6} onChange={(index) => setActiveTab(index)}>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>Properties</Tab>
                    <Tab>Allocation</Tab>
                    <Tab>Prospects</Tab>
                    <Tab>Analytics</Tab>
                    <Tab>Activity</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        {/* Estate Images */}
                        <Flex gap={4} mb={8} overflowX="auto" pb={2} direction={{ base: "column", md: "row" }}>
                            {mockEstate.images.map((img, index) => (
                                <Box
                                    key={index}
                                    position="relative"
                                    borderRadius="md"
                                    overflow="hidden"
                                    minW={{ base: "100%", md: "300px" }}
                                    maxW={{ base: "100%", md: "400px" }}
                                >
                                    <Image
                                        src={img || "/placeholder.svg"}
                                        alt={`Estate Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        style={{ width: "100%", height: "auto", aspectRatio: "4/3" }}
                                    />
                                    <Box position="absolute" bottom={0} left={0} right={0} p={2}>
                                        <Flex justify="space-between">
                                            <Button size="xs" variant="solid" bg="white">
                                                Slide View
                                            </Button>
                                            <Button size="xs" variant="solid" bg="white">
                                                Actual Image
                                            </Button>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>

                        {/* Estate Details */}
                        <Box mb={8}>
                            <Heading size="md" mb={4}>
                                Estate Details
                            </Heading>

                            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        NAME
                                    </Text>
                                    <Text fontWeight="medium">Two Bedroom Apartment</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        STATE
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.state}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        CITY
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.city}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        ADDRESS
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.address}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        POPULAR LANDMARK
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.landmark}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        ESTATE LAND (IN HECTARES)
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.landSize}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        COMPLETION STATUS
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.completionStatus}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        VIDEO URL
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.videoUrl}</Text>
                                </Box>

                                <Box>
                                    <Text color="gray.500" fontSize="sm">
                                        NUMBER OF FLOORS
                                    </Text>
                                    <Text fontWeight="medium">{mockEstate.floors}</Text>
                                </Box>
                            </Grid>

                            <Box mt={6}>
                                <Text color="gray.500" fontSize="sm">
                                    DESCRIPTION
                                </Text>
                                <Text fontWeight="medium">{mockEstate.description}</Text>
                                <Button variant="link" colorScheme="blue" size="sm" mt={1}>
                                    Read More
                                </Button>
                            </Box>
                        </Box>

                        {/* Specifications & Amenities */}
                        <Box>
                            <Heading size="md" mb={4}>
                                Specifications & Amenities
                            </Heading>
                            {/* Add specifications content here */}
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400" />
                            <Text mt={2} color="gray.500">
                                Properties content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400" />
                            <Text mt={2} color="gray.500">
                                Allocation content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400" />
                            <Text mt={2} color="gray.500">
                                Prospects content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400" />
                            <Text mt={2} color="gray.500">
                                Analytics content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400" />
                            <Text mt={2} color="gray.500">
                                Activity content will appear here
                            </Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            {/* Action Buttons */}
            <Flex
                position="fixed"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                direction="column"
                gap={2}
                display={{ base: "none", lg: "flex" }}
            >
                <Button leftIcon={<Icon as={MdAdd} />} colorScheme="green" variant="solid" size="sm">
                    Add House
                </Button>
                <Button leftIcon={<Icon as={MdShare} />} colorScheme="blue" variant="outline" size="sm">
                    Share Estate
                </Button>
                <Button leftIcon={<Icon as={MdEdit} />} colorScheme="gray" variant="outline" size="sm">
                    QR Code
                </Button>
                <Button leftIcon={<Icon as={MdDelete} />} colorScheme="red" variant="outline" size="sm">
                    Delete Estate
                </Button>
            </Flex>
        </Box>
    )
}

