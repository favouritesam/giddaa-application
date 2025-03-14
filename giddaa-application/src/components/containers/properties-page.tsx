"use client"

import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import Image from "next/image"
import {
    MdSearch,
    MdMoreVert,
    MdEdit,
    MdAdd,
    MdDelete,
    MdVisibility,
    MdHouse,
    MdApartment,
    MdLocationOn,
    MdHelp,
    MdNotifications,
    MdSettings,
} from "react-icons/md"

type PropertiesPageProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate", estateId?: string) => void
}

// Mock data for estates
const mockEstates = [
    {
        id: "1",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 10,
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: "2",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 10,
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: "3",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 10,
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: "4",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 10,
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function PropertiesPage({ onNavigate }: PropertiesPageProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box p={4} maxW="1600px" mx="auto">
            {/* Header */}
            <Flex
                justify="space-between"
                align="center"
                mb={6}
                direction={{ base: "column", md: "row" }}
                gap={{ base: 4, md: 0 }}
            >
                <Heading size="md">My Properties</Heading>

                <Flex gap={4} w={{ base: "full", md: "auto" }}>
                    <InputGroup maxW={{ base: "full", md: "300px" }}>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={MdSearch} color="gray.400" />
                        </InputLeftElement>
                        <Input placeholder="Search for anything..." borderRadius="full" />
                    </InputGroup>

                    <HStack spacing={2}>
                        <Button variant="ghost" borderRadius="full" p={0} minW={10} h={10}>
                            <Icon as={MdHelp} boxSize={5} />
                        </Button>
                        <Button variant="ghost" borderRadius="full" p={0} minW={10} h={10}>
                            <Icon as={MdNotifications} boxSize={5} />
                        </Button>
                        <Button variant="ghost" borderRadius="full" p={0} minW={10} h={10}>
                            <Icon as={MdSettings} boxSize={5} />
                        </Button>
                    </HStack>
                </Flex>
            </Flex>

            {/* Stats */}
            <Flex mb={6} gap={4} direction={{ base: "column", sm: "row" }} wrap="wrap">
                <Flex align="center" gap={2}>
                    <Icon as={MdApartment} boxSize={5} color="gray.500" />
                    <Text fontWeight="medium">5 ESTATES</Text>
                </Flex>
                <Flex align="center" gap={2}>
                    <Icon as={MdHouse} boxSize={5} color="gray.500" />
                    <Text fontWeight="medium">10 HOUSES</Text>
                </Flex>
                <Flex align="center" gap={2}>
                    <Icon as={MdLocationOn} boxSize={5} color="gray.500" />
                    <Text fontWeight="medium">7 UNITS</Text>
                </Flex>
            </Flex>

            {/* Estates Section */}
            <Box mb={8}>
                <Flex justify="space-between" align="center" mb={4}>
                    <Heading size="md">Estates - 5</Heading>
                    <Button colorScheme="green" leftIcon={<Icon as={MdAdd} />} onClick={() => onNavigate("create-estate")}>
                        Create Estate
                    </Button>
                </Flex>

                {/* Estates Grid */}
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                        xl: "repeat(4, 1fr)",
                    }}
                    gap={4}
                >
                    {mockEstates.map((estate) => (
                        <Box
                            key={estate.id}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            position="relative"
                            borderColor="blue.100"
                        >
                            <Box position="absolute" top={2} left={2} bg="white" px={2} py={1} borderRadius="md" zIndex={1}>
                                <Text fontSize="xs" fontWeight="bold">
                                    10 Houses
                                </Text>
                            </Box>

                            <Image
                                src={estate.image || "/placeholder.svg"}
                                alt={estate.name}
                                width={300}
                                height={200}
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />

                            <Box p={4}>
                                <Heading size="sm" mb={2}>
                                    {estate.name}
                                </Heading>
                                <Text fontSize="sm" color="gray.600" noOfLines={2} mb={4}>
                                    {estate.location}
                                </Text>

                                <Flex justify="space-between" align="center">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        leftIcon={<Icon as={MdVisibility} />}
                                        onClick={() => onNavigate("view-estate", estate.id)}
                                    >
                                        View House
                                    </Button>

                                    <Menu>
                                        <MenuButton as={Button} variant="ghost" size="sm" p={1}>
                                            <Icon as={MdMoreVert} />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem icon={<Icon as={MdEdit} />}>Edit Estate</MenuItem>
                                            <MenuItem icon={<Icon as={MdAdd} />}>Add House</MenuItem>
                                            <MenuItem icon={<Icon as={MdDelete} />} color="red.500">
                                                Delete Estate
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

