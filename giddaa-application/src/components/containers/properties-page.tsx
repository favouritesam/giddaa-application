"use client"

import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Icon,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Image, Center, Divider,
} from "@chakra-ui/react"

import {
    MdMoreVert,
    MdAdd,
    MdVisibility,
} from "react-icons/md"
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";

type PropertiesPageProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate", estateId?: string) => void
}


const mockEstates = [
    {
        id: "1",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 4,
        image: "/img/estatehouse.png",
    },
    {
        id: "2",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 10,
        image: "/img/estatehouse.png",
    },
    {
        id: "3",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 7,
        image: "/img/estatehouse.png",
    },
    {
        id: "4",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 23,
        image: "/img/estatehouse.png",
    },
    {
        id: "5",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 1,
        image: "/img/estatehouse.png",
    },
    {
        id: "6",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 3,
        image: "/img/estatehouse.png",
    },
    {
        id: "7",
        name: "Paradise Estate",
        location: "No 17 Umar Street, Wuse 1, Federal Capital Territory, Abuja",
        houses: 1,
        image: "/img/estatehouse.png",
    },
]

export default function PropertiesPage({onNavigate}: PropertiesPageProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const estatesPerPage = 3;
    const totalEstates = mockEstates.length;
    const totalPages = Math.ceil(totalEstates / estatesPerPage);
    const startIndex = (currentPage - 1) * estatesPerPage;
    const displayedEstates = mockEstates.slice(startIndex, startIndex + estatesPerPage);
    const remainingEstates = totalEstates - (startIndex + displayedEstates.length);


    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Box p={2} maxW="1600px" mx="auto" overflowX="hidden">
            <Box  position="sticky"
                  top="0"
                  zIndex="1000"
                  bg="white"
                  w="full"
            >
                <Flex
                    justify="space-between"
                    align="center"
                    mb={6}
                    direction={{base: "column", md: "row"}}
                    gap={{base: 4, md: 0}}>

                    <Flex alignItems="center" gap={4}>
                        <Image
                            src="/img/BackAndForwardButtons.png"
                            alt="backButton"
                            width="41px"
                            height="16px"
                        />
                        <Text fontWeight={500} fontSize={14} color='#000000'>My Properties</Text>
                    </Flex>

                    <Box
                        position="absolute"
                        left="50%"
                        transform="translateX(-50%)"
                        w="300px"
                        h="36px"
                        bg="#F0F0F0"
                        borderRadius="100px"
                        display="flex"
                        alignItems="center"
                        px={4}
                        justifyContent="center"
                    >
                        <InputGroup alignItems="center" p={2} gap={4}>
                            <Image
                                src="/img/search.png"
                                alt="search"
                                width="15px"
                                height="15px"
                            />
                            <Input
                                placeholder="Search..."
                                fontWeight={400}
                                fontSize={12}
                                color='#4B4B4B'
                                bg="transparent"
                                border="none"
                                outline="none"
                                _focus={{boxShadow: "none"}}
                                _placeholder={{color: "gray.500"}}
                            />
                        </InputGroup>
                    </Box>

                    <Flex justifyContent="flex-end" alignItems="center" gap={6}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<FaChevronDown cursor='pointer'/>}
                                bg="#F0F0F0"
                                w="150px"
                                h="36px"
                                borderRadius="100px"
                                border="none"
                                _hover='#F0F0F0'
                            >
                                <Flex align="center" justify="center" gap={2}>
                                    <Image src="/img/vid.png" alt="vid" width="16px" height="18px"/>
                                    <Text fontWeight={700} fontSize={11}>How It Works</Text>
                                </Flex>
                            </MenuButton>

                            <MenuList p="10px" minW="140px" bg="white" h="70px" borderRadius="10px"
                                      border="1px solid #E1E1E1" cursor="pointer">
                                <Flex gap={3} alignItems="center">
                                    <Image src="/img/vid.png" alt="vid" width="16px" height="18px"/>
                                    <Text fontWeight={500} fontSize={12} color='#000000'> Product Tour and Guide</Text>
                                </Flex>
                                <Flex gap={3} alignItems="center" mt='6%'>
                                    <Image src="/img/videoplay.png" alt="video" width="16px" height="18px"/>
                                    <Text fontWeight={500} fontSize={12} color='#000000'>Video Tutorial</Text>
                                </Flex>
                            </MenuList>
                        </Menu>

                        <Flex cursor="pointer" gap={4}>
                            <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                                  justifyContent="center">
                                <Image src="/img/bell.png" alt="bell" width="16px" height="18px"/>
                            </Flex>
                            <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                                  justifyContent="center">
                                <Image src="/img/clock.png" alt="clock" width="16px" height="18px"/>
                            </Flex>
                            <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center"
                                  justifyContent="center">
                                <Image src="/img/arrow.png" alt="arrow" width="16px" height="18px"/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex mb={6} gap={4} direction={{base: "column", sm: "row"}} wrap="wrap">
                    <Flex align="center" gap={2}>
                        <Center w='32px' h='32px' bg='#FAFFFA' borderRadius='20px' border='1px solid #F0F0F0'>
                            <Image src="/img/doubleHouse.svg" alt="house"/></Center>
                        <Text fontWeight="medium">5 ESTATES</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Center w='32px' h='32px' bg='#FAFFFA' borderRadius='20px' border='1px solid #F0F0F0'>
                            <Image src="/img/oneHouse.png" alt="house"/></Center>
                        <Text fontWeight="medium">10 HOUSES</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Image src="/img/dot.png" alt="dot"/>
                        <Text fontWeight="medium">7 UNITS</Text>
                    </Flex>
                </Flex>
                <Box mb={6} mt='-1%'><Divider/></Box>
            </Box>


            <Box mb={8}>
                <Flex justify="space-between" align="center" mb={4}>
                    <Heading size="md">Estates - {mockEstates.length}</Heading>
                    <Button colorScheme="green" leftIcon={<Icon as={MdAdd}/>}
                            onClick={() => onNavigate("create-estate")}>
                        Create Estate
                    </Button>
                </Flex>

                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                        xl: "repeat(3, 1fr)",
                    }}
                    gap={4}
                >
                    {displayedEstates.map((estate) => (
                        <Box
                            key={estate.id}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            position="relative"
                            borderColor="blue.100"
                        >
                            <Box position="absolute" top={2} left={2} px={2} py={1}
                                 zIndex={1}
                                 bg="#EAFFEA"
                                 color="#335F32"
                                 fontSize="12px"
                                 fontWeight="bold"
                                 border="1px solid #335F32"
                                 borderRadius="20px"
                            >
                                <Text fontSize="xs" fontWeight="bold">
                                    {estate.houses} Houses
                                </Text>
                            </Box>

                            <Image
                                src={estate.image || "/placeholder.svg"}
                                alt={estate.name}
                                width={300}
                                height={200}
                                style={{width: "100%", height: "200px", objectFit: "cover"}}
                            />

                            <Box p={4}>
                                <Center>
                                    <Heading size="sm" mb={2}>
                                        {estate.name}
                                    </Heading>
                                </Center>
                                <Text color="gray.600" noOfLines={2} mb={4} lineHeight="21px" textAlign="center"
                                      fontSize="16px" fontWeight={400} px='4px'>
                                    {estate.location}
                                </Text>

                                <Flex justify="flex-end" align="center">

                                    <Menu placement="bottom-start">
                                        <MenuButton as={Button} variant="ghost" size="sm" borderRadius='20px'
                                                    p={1} border='1px solid #F0F0F0' bg='#F0F0F0' color='#98A2B3'>
                                            <Icon as={MdMoreVert}/>
                                        </MenuButton>
                                        <MenuList p="12px" minW="130px" bg="white" h='162px' borderRadius='15px'
                                                  border='1px #E1E1E1 solid' cursor='pointer'>
                                            <Button
                                                border='none'
                                                variant="outline"
                                                size="sm"
                                                leftIcon={<Icon as={MdVisibility}/>}
                                                onClick={() => onNavigate("view-estate", estate.id)}
                                            >
                                                View House
                                            </Button>
                                            <MenuItem display='flex' gap={2}>
                                                <Image src="/img/edit.png" alt="edit" w='12px' h='12px'/>
                                                <Text fontWeight={400} fontSize={14}> Edit Estate</Text>
                                            </MenuItem>

                                            <MenuItem display='flex' gap={2}>
                                                <Image src="/img/house.png" alt="house" w='14px' h='12.16px'/>
                                                <Text fontWeight={400} fontSize={14}> Add House</Text>
                                            </MenuItem>
                                            <MenuItem display='flex' gap={2}>
                                                <Image src="/img/delete.png" alt="delete" w='12px' h='15px'/>
                                                <Text color='#E40000' fontWeight={400} fontSize={14}>
                                                    Delete House
                                                </Text>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>

            <Flex justify="center" align="center" mt={4} gap={2}>

                <Button
                    onClick={handlePrev}
                    isDisabled={currentPage === 1}
                    bg={currentPage === 1 ? "#F0F0F0" : "green.700"}
                    color={currentPage === 1 ? "gray.400" : "white"}
                    _hover={{ bg: "green.800" }}
                    borderRadius="md"
                    px={2}
                    h='29px'
                >
                    ◀
                </Button>

                <Button
                    onClick={handleNext}
                    isDisabled={currentPage === totalPages}
                    bg={currentPage === totalPages ? "#F0F0F0" : "green.700"}
                    color={currentPage === totalPages ? "gray.400" : "white"}
                    _hover={{ bg: "green.800" }}
                    borderRadius="md"
                    px={2}
                    h='29px'
                >
                    ▶
                </Button>
            </Flex>

            <Center mt={2}>
                {remainingEstates > 0 && (
                    <Text fontSize="sm" fontWeight="semibold" color="green.700">
                        View {remainingEstates} More
                    </Text>
                )}
            </Center>
        </Box>
    )
}



// "use client"
// import {
//     Box,
//     Button,
//     Flex,
//     Grid,
//     Heading,
//     Icon,
//     Input,
//     InputGroup,
//     Menu,
//     MenuButton,
//     MenuItem,
//     MenuList,
//     Text,
//     Image, Center, Divider,
// } from "@chakra-ui/react";
//
// import {
//     MdMoreVert,
//     MdAdd,
//     MdVisibility,
// } from "react-icons/md";
// import { FaChevronDown } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
//
// type PropertiesPageProps = {
//     onNavigate: (page: "properties" | "create-estate" | "view-estate", estateId?: string) => void;
// };
//
// type Estate = {
//     id: string;
//     name: string;
//     location: string;
//     houses: number;
//     image: string;
// };
//
// export default function PropertiesPage({ onNavigate }: PropertiesPageProps) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [estates, setEstates] = useState<Estate[]>([]);
//     const [totalEstates, setTotalEstates] = useState(0);
//     const [isClient, setIsClient] = useState(false); // Track client-side rendering
//     const estatesPerPage = 3;
//     const totalPages = Math.ceil(totalEstates / estatesPerPage);
//     const startIndex = (currentPage - 1) * estatesPerPage;
//     const displayedEstates = estates.slice(startIndex, startIndex + estatesPerPage);
//     const remainingEstates = totalEstates - (startIndex + displayedEstates.length);
//     const router = useRouter();
//
//     useEffect(() => {
//         setIsClient(true); // Set isClient to true after component mounts
//         fetchEstates();
//     }, [currentPage]);
//
//     const fetchEstates = async () => {
//         try {
//             const token = sessionStorage.getItem("authToken");
//             if (!token) {
//                 console.error("No authentication token found. Please log in.");
//                 router.push("/login");
//                 return;
//             }
//
//             const response = await fetch("https://dev-api.giddaa.com/developer/estate/get-all", {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//             });
//
//             if (!response.ok) {
//                 if (response.status === 401) {
//                     console.error("Unauthorized: Token is invalid or expired.");
//                     sessionStorage.removeItem("authToken");
//                     router.push("/login");
//                 } else {
//                     console.error("Error fetching estates:", response.statusText);
//                 }
//                 return;
//             }
//
//             const data = await response.json();
//             console.log("Estates data:", data);
//             setEstates(data.value.estates);
//             setTotalEstates(data.value.totalCount);
//         } catch (error) {
//             console.error("Error during fetchEstates:", error);
//         }
//     };
//
//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };
//
//     const handlePrev = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//
//     // Render a fallback during SSR
//     if (!isClient) {
//         return <p>Loading...</p>;
//     }
//
//     return (
//         <Box p={2} maxW="1600px" mx="auto" overflowX="hidden">
//             <Box position="sticky" top="0" zIndex="1000" bg="white" w="full">
//                 <Flex justify="space-between" align="center" mb={6} direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 0 }}>
//                     <Flex alignItems="center" gap={4}>
//                         <Image src="/img/BackAndForwardButtons.png" alt="backButton" width="41px" height="16px" />
//                         <Text fontWeight={500} fontSize={14} color="#000000">My Properties</Text>
//                     </Flex>
//
//                     <Box position="absolute" left="50%" transform="translateX(-50%)" w="300px" h="36px" bg="#F0F0F0" borderRadius="100px" display="flex" alignItems="center" px={4} justifyContent="center">
//                         <InputGroup alignItems="center" p={2} gap={4}>
//                             <Image src="/img/search.png" alt="search" width="15px" height="15px" />
//                             <Input placeholder="Search..." fontWeight={400} fontSize={12} color="#4B4B4B" bg="transparent" border="none" outline="none" _focus={{ boxShadow: "none" }} _placeholder={{ color: "gray.500" }} />
//                         </InputGroup>
//                     </Box>
//
//                     <Flex justifyContent="flex-end" alignItems="center" gap={6}>
//                         <Menu>
//                             <MenuButton as={Button} rightIcon={<FaChevronDown cursor="pointer" />} bg="#F0F0F0" w="150px" h="36px" borderRadius="100px" border="none" _hover={{ bg: "#F0F0F0" }}>
//                                 <Flex align="center" justify="center" gap={2}>
//                                     <Image src="/img/vid.png" alt="vid" width="16px" height="18px" />
//                                     <Text fontWeight={700} fontSize={11}>How It Works</Text>
//                                 </Flex>
//                             </MenuButton>
//
//                             <MenuList p="10px" minW="140px" bg="white" h="70px" borderRadius="10px" border="1px solid #E1E1E1" cursor="pointer">
//                                 <Flex gap={3} alignItems="center">
//                                     <Image src="/img/vid.png" alt="vid" width="16px" height="18px" />
//                                     <Text fontWeight={500} fontSize={12} color="#000000">Product Tour and Guide</Text>
//                                 </Flex>
//                                 <Flex gap={3} alignItems="center" mt="6%">
//                                     <Image src="/img/videoplay.png" alt="video" width="16px" height="18px" />
//                                     <Text fontWeight={500} fontSize={12} color="#000000">Video Tutorial</Text>
//                                 </Flex>
//                             </MenuList>
//                         </Menu>
//
//                         <Flex cursor="pointer" gap={4}>
//                             <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                                 <Image src="/img/bell.png" alt="bell" width="16px" height="18px" />
//                             </Flex>
//                             <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                                 <Image src="/img/clock.png" alt="clock" width="16px" height="18px" />
//                             </Flex>
//                             <Flex w="30px" h="30px" bg="#F0F0F0" borderRadius="10px" alignItems="center" justifyContent="center">
//                                 <Image src="/img/arrow.png" alt="arrow" width="16px" height="18px" />
//                             </Flex>
//                         </Flex>
//                     </Flex>
//                 </Flex>
//                 <Flex mb={6} gap={4} direction={{ base: "column", sm: "row" }} wrap="wrap">
//                     <Flex align="center" gap={2}>
//                         <Center w="32px" h="32px" bg="#FAFFFA" borderRadius="20px" border="1px solid #F0F0F0">
//                             <Image src="/img/doubleHouse.svg" alt="house" />
//                         </Center>
//                         <Text fontWeight="medium">5 ESTATES</Text>
//                     </Flex>
//                     <Flex align="center" gap={2}>
//                         <Center w="32px" h="32px" bg="#FAFFFA" borderRadius="20px" border="1px solid #F0F0F0">
//                             <Image src="/img/oneHouse.png" alt="house" />
//                         </Center>
//                         <Text fontWeight="medium">10 HOUSES</Text>
//                     </Flex>
//                     <Flex align="center" gap={2}>
//                         <Image src="/img/dot.png" alt="dot" />
//                         <Text fontWeight="medium">7 UNITS</Text>
//                     </Flex>
//                 </Flex>
//                 <Box mb={6} mt="-1%"><Divider /></Box>
//             </Box>
//
//             <Box mb={8}>
//                 <Flex justify="space-between" align="center" mb={4}>
//                     <Heading size="md">Estates - {totalEstates}</Heading>
//                     <Button colorScheme="green" leftIcon={<Icon as={MdAdd} />} onClick={() => onNavigate("create-estate")}>
//                         Create Estate
//                     </Button>
//                 </Flex>
//
//                 <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)" }} gap={4}>
//                     {displayedEstates.map((estate) => (
//                         <Box key={estate.id} borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" borderColor="blue.100">
//                             <Box position="absolute" top={2} left={2} px={2} py={1} zIndex={1} bg="#EAFFEA" color="#335F32" fontSize="12px" fontWeight="bold" border="1px solid #335F32" borderRadius="20px">
//                                 <Text fontSize="xs" fontWeight="bold">{estate.houses} Houses</Text>
//                             </Box>
//
//                             <Image src={estate.image || "/placeholder.svg"} alt={estate.name} width={300} height={200} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//
//                             <Box p={4}>
//                                 <Center>
//                                     <Heading size="sm" mb={2}>{estate.name}</Heading>
//                                 </Center>
//                                 <Text color="gray.600" noOfLines={2} mb={4} lineHeight="21px" textAlign="center" fontSize="16px" fontWeight={400} px="4px">
//                                     {estate.location}
//                                 </Text>
//
//                                 <Flex justify="flex-end" align="center">
//                                     <Menu placement="bottom-start">
//                                         <MenuButton as={Button} variant="ghost" size="sm" borderRadius="20px" p={1} border="1px solid #F0F0F0" bg="#F0F0F0" color="#98A2B3">
//                                             <Icon as={MdMoreVert} />
//                                         </MenuButton>
//                                         <MenuList p="12px" minW="130px" bg="white" h="162px" borderRadius="15px" border="1px #E1E1E1 solid" cursor="pointer">
//                                             <Button border="none" variant="outline" size="sm" leftIcon={<Icon as={MdVisibility} />} onClick={() => onNavigate("view-estate", estate.id)}>
//                                                 View House
//                                             </Button>
//                                             <MenuItem display="flex" gap={2}>
//                                                 <Image src="/img/edit.png" alt="edit" w="12px" h="12px" />
//                                                 <Text fontWeight={400} fontSize={14}>Edit Estate</Text>
//                                             </MenuItem>
//                                             <MenuItem display="flex" gap={2}>
//                                                 <Image src="/img/house.png" alt="house" w="14px" h="12.16px" />
//                                                 <Text fontWeight={400} fontSize={14}>Add House</Text>
//                                             </MenuItem>
//                                             <MenuItem display="flex" gap={2}>
//                                                 <Image src="/img/delete.png" alt="delete" w="12px" h="15px" />
//                                                 <Text color="#E40000" fontWeight={400} fontSize={14}>Delete House</Text>
//                                             </MenuItem>
//                                         </MenuList>
//                                     </Menu>
//                                 </Flex>
//                             </Box>
//                         </Box>
//                     ))}
//                 </Grid>
//             </Box>
//
//             <Flex justify="center" align="center" mt={4} gap={2}>
//                 <Button onClick={handlePrev} isDisabled={currentPage === 1} bg={currentPage === 1 ? "#F0F0F0" : "green.700"} color={currentPage === 1 ? "gray.400" : "white"} _hover={{ bg: "green.800" }} borderRadius="md" px={2} h="29px">
//                     ◀
//                 </Button>
//                 <Button onClick={handleNext} isDisabled={currentPage === totalPages} bg={currentPage === totalPages ? "#F0F0F0" : "green.700"} color={currentPage === totalPages ? "gray.400" : "white"} _hover={{ bg: "green.800" }} borderRadius="md" px={2} h="29px">
//                     ▶
//                 </Button>
//             </Flex>
//
//             <Center mt={2}>
//                 {remainingEstates > 0 && (
//                     <Text fontSize="md" fontWeight="medium" color="green.700">
//                         View {remainingEstates} More
//                     </Text>
//                 )}
//             </Center>
//         </Box>
//     );
// }