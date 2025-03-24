"use client"

import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Icon,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Image, Divider,
    Menu,
    MenuList,
    MenuButton
} from "@chakra-ui/react"
import React, {useEffect, useState} from "react"
import {MdInfoOutline} from "react-icons/md"
import {MoreVertical} from "lucide-react";

// type ViewEstatePageProps = {
//     estateId: string | null
//     onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
// }

type ViewEstatePageProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
    estateId?: string | null;
}



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
        "The property is a really nice and beautiful place. " +
        "We think you should buy it because it is the best. " +
        "They you could ever buy in your life for real just buy" +
        "They you could ever buy in your life for real just buy"+
        "They you could ever buy in your life for real just buy"+
        " this house. It will be good for...",
    images: [
        "/img/house2.png",
        "/img/fine.png",
        "/img/house2.png",
    ],
}

// export default function ViewEstatePage({estateId, onNavigate}: ViewEstatePageProps) {

export default function ViewEstatePage({ estateId, onNavigate }: ViewEstatePageProps) {
    const [activeTab, setActiveTab] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false);
    const maxDescriptionLength = 150;

    useEffect(() => {
        console.log("Active Tab Changed:", activeTab);
    }, [activeTab]);

    return (
        <Box maxW="1200px" mx="auto">
            <Box position="sticky" top="0" zIndex="1000" bg="white" w="full">
            <Flex align="center" justify="space-between" mb={6} direction={{base: "column", md: "row"}} gap={{base: 4, md: 0}}>
                <Flex align="center">
                    <Button
                        onClick={() => onNavigate("properties")}
                        variant="outline"
                        w='81px'
                        h='32px'
                        borderRadius="5px"
                        border='2px solid #335F32'
                        bg='#FFFFFF'
                        color="#335F32"
                        _hover={{bg: "#335F32", color: "#FFFFFF"}}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        fontWeight={700}
                        fontSize='13px'
                        cursor='pointer'
                    >
                        <Image src="/img/buttonArrow.png" alt="Back" w='12px' h='12px' _hover={{color: "#FFFFFF"}}/>
                        Back
                    </Button>

                    <Heading size="md" ml={4}>
                        Creating Estate
                    </Heading>
                </Flex>

                <Flex gap={4}>
                    <Button
                        cursor="pointer"
                        h="35px"
                        borderRadius="100px"
                        bg="#346633"
                        border="none"
                        color="#FFFFFF"
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Image src="/img/editWhite.png" alt="edit" w="12px" h="12px"/>
                        Update Estate
                    </Button>

                    <Menu placement="bottom-start">
                        <MenuButton as={Box} cursor="pointer" p={1} h='30px' borderRadius='20px'
                                    bg='#F0F0F0'
                                    justifyContent='center' alignItems="center">
                            <MoreVertical color="#98A2B3"/>
                        </MenuButton>

                        <MenuList p="12px" py='14px' minW="130px" bg="white" h='140px' borderRadius='15px' border='1px #E1E1E1 solid' cursor='pointer'>
                            <Flex gap={4} mb='6%' alignItems='center'><Image src="/img/church.png" alt="church" w='16px' h='14.54px'/><Text fontWeight={400} fontSize={14}> Add House</Text></Flex>
                            <Flex gap={4} alignItems='center' mb='6%'><Image src="/img/share.svg" alt="share" w='14px' h='14px'/><Text fontWeight={400} fontSize={14}> Share Estate</Text></Flex>
                            <Flex gap={4} alignItems='center' mb='4%'><Image src="/img/q.svg" alt="q" w='14px' h='14px'/><Text fontWeight={400} fontSize={14}> QR Code</Text></Flex>
                            <Flex gap={4} alignItems='center' mt='6%'><Image src="/img/delete.png" alt="delete" w='12px' h='15px'/><Text fontWeight={400} fontSize={14}> Delete Estate</Text></Flex>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            <Flex mb={6} gap={4}>
                <Text>Viewing Estate: {estateId ? estateId : "No estate selected"}</Text>
                <Flex>
                    <Text fontSize="sm" color='#000000'>Estates</Text>
                    <Text fontSize="sm" color="gray.600" mx={2}>&gt;</Text>
                    <Text fontSize="sm" color='#000000'>Create Estate</Text>
                </Flex>
            </Flex>
            <Box mb='4%' mt='-2%'><Divider/></Box>
        </Box>

                <Tabs
                    mb={6}
                    onChange={(index) => setActiveTab(index)}
                    variant="line"
                    position="relative"
                    sx={{
                        ".chakra-tabs__tab": {
                            color: "gray.500",
                        },
                        ".chakra-tabs__tab[aria-selected=true]": {
                            color: "#335F32",
                            fontWeight: "bold"
                        },
                        ".chakra-tabs__tablist": {
                            borderBottom: "2px solid #F0F0F0"
                        },
                        ".chakra-tabs__tab[aria-selected=true]::after": {
                            content: '""',
                            position: "absolute",
                            bottom: "-2px",
                            left: 0,
                            width: "100%",
                            height: "2px",
                            backgroundColor: "#F0F0F0",
                        }
                    }}
                >
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
                        <Flex gap={4} mb={8} overflowX="auto" pb={2} direction={{base: "column", md: "row"}}>
                            {mockEstate.images.map((img, index) => (
                                <Box
                                    key={index}
                                    position="relative"
                                    borderRadius="md"
                                    overflow="hidden"
                                    minW={{base: "100%", md: "300px"}}
                                    maxW={{base: "100%", md: "400px"}}
                                >
                                    <Image
                                        src={img || "/placeholder.svg"}
                                        alt={`Estate Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        style={{width: "100%", height: "auto", aspectRatio: "4/3"}}
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

                        <Box mb={8}>
                            <Heading size="md" mb={4}>
                                Estate Details
                            </Heading>

                            <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={6}>
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
                                <Text fontWeight="medium">
                                    {isExpanded ? mockEstate.description :
                                        `${mockEstate.description.substring(0, maxDescriptionLength)}...`}
                                </Text>
                                <Button
                                    variant="link"
                                    colorScheme="blue"
                                    size="sm"
                                    mt={1}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    {isExpanded ? "View Less" : "Read More"}
                                </Button>
                            </Box>
                        </Box>

                        <Box>
                            <Heading size="md" mb={4}>
                                Specifications & Amenities
                            </Heading>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400"/>
                            <Text mt={2} color="gray.500">
                                Properties content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400"/>
                            <Text mt={2} color="gray.500">
                                Allocation content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400"/>
                            <Text mt={2} color="gray.500">
                                Prospects content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400"/>
                            <Text mt={2} color="gray.500">
                                Analytics content will appear here
                            </Text>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box p={4} textAlign="center">
                            <Icon as={MdInfoOutline} boxSize={10} color="gray.400"/>
                            <Text mt={2} color="gray.500">
                                Activity content will appear here
                            </Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

