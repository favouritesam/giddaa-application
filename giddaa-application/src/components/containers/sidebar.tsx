"use client"

import type React from "react"

import {
    Box,
    Flex,
    Icon,
    Text,
    VStack,
    Button,
    Image,
    Divider,
    Menu,
    MenuList,
    MenuButton
} from "@chakra-ui/react"
import {MdDashboard, MdHouse} from "react-icons/md"
import {FaLock, FaUser} from "react-icons/fa";
import {MoreVertical} from "lucide-react";

type SidebarProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
    currentPage: string
    name: string
    email: string
}


export default function Sidebar({onNavigate, currentPage, name, email}: SidebarProps) {
    const getInitials = (fullName: any) => {
        return fullName
            .split(" ")
            .map((n: any[]) => n[0])
            .join("")
            .toUpperCase();
    };
    const userName = name || "John Doe";
    const userEmail = email || "johndoe@example.com";

    return (
        <Box
            bg="#2C6E31"
            color="white"
            w={{base: "70px", md: "240px"}}
            h="100vh"
            py={4}
            px={{base: 2, md: 4}}
            position="sticky"
            top={0}
            left={0}
            zIndex={10}
            overflowY="auto"
            className="flex-shrink-0"
        >
            <Flex direction="column" h="full">
                <Flex align="center" mb={8} px={2}>
                    <Box mr={2} display={{base: "none", md: "block"}}>
                        <Image src="/img/logo.png" alt="Logo" w="99.9px" h="39px"/>
                    </Box>
                </Flex>

                <Text fontSize="9px" mb={4} px={2} fontWeight={600} isTruncated maxW="130px"
                      display={{base: "none", md: "block"}}>
                    Residencia Moderno Smart you
                </Text>
                <Divider/>


                <VStack spacing={1} align="stretch" mb="auto" mt='20%'>
                    <NavItem icon={MdDashboard} label="Dashboard" onClick={() => onNavigate("properties")}
                             isActive={false}/>
                    <Box bg='white' borderRadius={100} border='none'>
                        <NavItem
                            color="#335F32"
                            icon={MdHouse}
                            label="Properties"
                            onClick={() => onNavigate("properties")}
                            isActive={currentPage === "properties" || currentPage === "create-estate" || currentPage === "view-estate"}
                        />
                    </Box>
                </VStack>

                <Box bg="white" borderRadius="100px" w="185px" h="45px" borderColor="#D9D9D9" px="8px">
                    <Flex align="center" justify="space-between" h="full">
                        <Box w="40px" h="40px" display="flex" borderRadius="25px" alignItems="center"
                             justifyContent="center" bg="#335F32" color="white" fontSize="13px" fontWeight={700}>
                            {getInitials(userName)}
                        </Box>

                        <VStack spacing="0" align="start" ml="10px" flex="1">
                            <Text fontSize="11px" fontWeight={600} color="#000000">{userName}</Text>
                            <Text fontSize="9px" fontWeight={600} color="#667085">{userEmail}</Text>
                        </VStack>

                        <Menu placement="top-end">
                            <MenuButton as={Box} cursor="pointer" display='flex' justifyContent='flex-end'>
                                <MoreVertical size={20} color="#98A2B3"/>
                            </MenuButton>

                            <MenuList shadow="lg" rounded="md" w='84%' color={'#667085'} p="4" minW="90px"
                                      bg="white" h='130px' borderRadius='10px' border='1px solid #F9FAFB' mb={4}
                                      ml={10}>
                                <Box mb='10px' fontWeight={400} fontSize='14px' display='flex' gap='10px'>
                                    <Icon as={FaUser} color="#667085" mr={2}/> My Profile
                                </Box>
                                <Box fontWeight={400} fontSize='14px' display='flex' gap='10px'>
                                    <Icon as={FaLock} color="#667085" mr={2}/> Change Password
                                </Box>
                                <Image src="/img/line.png" alt="line logo" width="full" backgroundColor={'#335F32'}/>
                                <Box color={'#E40000'} fontSize='12px' cursor='pointer' fontWeight={700} mt={6}
                                     display='flex' gap='10px'>
                                    <Image src="/img/off.png" alt="off"/> Logout
                                </Box>
                            </MenuList>
                        </Menu>


                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}

type NavItemProps = {
    icon: React.ElementType
    label: string
    onClick: () => void
    isActive: boolean
    color?: string
}

function NavItem({icon, label, onClick, isActive, color}: NavItemProps) {
    return (
        <Button
            variant="ghost"
            justifyContent={{base: "center", md: "flex-start"}}
            px={3}
            py={3}
            borderRadius="md"
            onClick={onClick}
            bg={isActive ? "whiteAlpha.200" : "transparent"}
            _hover={{bg: "whiteAlpha.200"}}
            color={color || "white"}
            w="full"
            h="auto"
        >
            <Icon as={icon} boxSize={5} mr={{base: 0, md: 2}}/>
            <Text display={{base: "none", md: "block"}}>{label}</Text>
        </Button>
    )
}

