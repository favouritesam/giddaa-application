// "use client"
//
// import type React from "react"
//
// import { Box, Flex, Icon, Text, VStack, Avatar, Button } from "@chakra-ui/react"
// import Image from "next/image"
// import { MdDashboard, MdHouse, MdPerson, MdLock, MdExitToApp } from "react-icons/md"
//
// type SidebarProps = {
//     onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
//     currentPage: string
// }
//
// export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
//     return (
//         <Box
//             bg="brand.500"
//             color="white"
//             w={{ base: "70px", md: "240px" }}
//             h="full"
//             py={4}
//             px={{ base: 2, md: 4 }}
//             position="relative"
//         >
//             <Flex direction="column" h="full">
//                 {/* Logo */}
//                 <Flex align="center" mb={8} px={2}>
//                     <Box mr={2} display={{ base: "none", md: "block" }}>
//                         <Image src="/placeholder.svg?height=30&width=30" alt="Rddaa Logo" width={30} height={30} />
//                     </Box>
//                     <Text fontSize="xl" fontWeight="bold" display={{ base: "none", md: "block" }}>
//                         rddaa
//                     </Text>
//                 </Flex>
//
//                 {/* Tagline */}
//                 <Text fontSize="xs" mb={8} px={2} display={{ base: "none", md: "block" }}>
//                     RESIDÊNCIA MODERNA SMART
//                 </Text>
//
//                 {/* Navigation */}
//                 <VStack spacing={1} align="stretch" mb="auto">
//                     <NavItem icon={MdDashboard} label="Dashboard" onClick={() => onNavigate("properties")} isActive={false} />
//                     <NavItem
//                         icon={MdHouse}
//                         label="Properties"
//                         onClick={() => onNavigate("properties")}
//                         isActive={currentPage === "properties" || currentPage === "create-estate" || currentPage === "view-estate"}
//                     />
//                 </VStack>
//
//                 {/* User Profile */}
//                 <VStack spacing={1} align="stretch" mt={4}>
//                     <NavItem icon={MdPerson} label="My Profile" onClick={() => {}} isActive={false} />
//                     <NavItem icon={MdLock} label="Change Password" onClick={() => {}} isActive={false} />
//                     <NavItem icon={MdExitToApp} label="Logout" onClick={() => {}} isActive={false} color="red.300" />
//                 </VStack>
//
//                 {/* User Info */}
//                 <Flex mt={4} p={2} align="center" borderTop="1px" borderColor="whiteAlpha.300">
//                     <Avatar size="sm" name="James Mensah" src="/placeholder.svg?height=40&width=40" />
//                     <Box ml={2} display={{ base: "none", md: "block" }}>
//                         <Text fontSize="sm" fontWeight="medium">
//                             James Mensah
//                         </Text>
//                         <Text fontSize="xs" opacity={0.8}>
//                             jamesmensah@gmail.com
//                         </Text>
//                     </Box>
//                 </Flex>
//             </Flex>
//         </Box>
//     )
// }
//
// type NavItemProps = {
//     icon: React.ElementType
//     label: string
//     onClick: () => void
//     isActive: boolean
//     color?: string
// }
//
// function NavItem({ icon, label, onClick, isActive, color }: NavItemProps) {
//     return (
//         <Button
//             variant="ghost"
//             justifyContent={{ base: "center", md: "flex-start" }}
//             px={3}
//             py={3}
//             borderRadius="md"
//             onClick={onClick}
//             bg={isActive ? "whiteAlpha.200" : "transparent"}
//             _hover={{ bg: "whiteAlpha.200" }}
//             color={color || "white"}
//             w="full"
//             h="auto"
//         >
//             <Icon as={icon} boxSize={5} mr={{ base: 0, md: 2 }} />
//             <Text display={{ base: "none", md: "block" }}>{label}</Text>
//         </Button>
//     )
// }
//


"use client"

import type React from "react"

import { Box, Flex, Icon, Text, VStack, Avatar, Button } from "@chakra-ui/react"
import Image from "next/image"
import { MdDashboard, MdHouse, MdPerson, MdLock, MdExitToApp } from "react-icons/md"

type SidebarProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
    currentPage: string
}

export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
    return (
        <Box
            bg="#2C6E31"
            color="white"
            w={{ base: "70px", md: "240px" }}
            h="full"
            py={4}
            px={{ base: 2, md: 4 }}
            position="relative"
        >
            <Flex direction="column" h="full">
                {/* Logo */}
                <Flex align="center" mb={8} px={2}>
                    <Box mr={2} display={{ base: "none", md: "block" }}>
                        <Image src="/placeholder.svg?height=30&width=30" alt="Rddaa Logo" width={30} height={30} />
                    </Box>
                    <Text fontSize="xl" fontWeight="bold" display={{ base: "none", md: "block" }}>
                        rddaa
                    </Text>
                </Flex>

                {/* Tagline */}
                <Text fontSize="xs" mb={8} px={2} display={{ base: "none", md: "block" }}>
                    RESIDÊNCIA MODERNA SMART
                </Text>

                {/* Navigation */}
                <VStack spacing={1} align="stretch" mb="auto">
                    <NavItem icon={MdDashboard} label="Dashboard" onClick={() => onNavigate("properties")} isActive={false} />
                    <NavItem
                        icon={MdHouse}
                        label="Properties"
                        onClick={() => onNavigate("properties")}
                        isActive={currentPage === "properties" || currentPage === "create-estate" || currentPage === "view-estate"}
                    />
                </VStack>

                {/* User Profile */}
                <VStack spacing={1} align="stretch" mt={4}>
                    <NavItem icon={MdPerson} label="My Profile" onClick={() => {}} isActive={false} />
                    <NavItem icon={MdLock} label="Change Password" onClick={() => {}} isActive={false} />
                    <NavItem icon={MdExitToApp} label="Logout" onClick={() => {}} isActive={false} color="red.300" />
                </VStack>

                {/* User Info */}
                <Flex mt={4} p={2} align="center" borderTop="1px" borderColor="whiteAlpha.300">
                    <Avatar size="sm" name="James Mensah" src="/placeholder.svg?height=40&width=40" />
                    <Box ml={2} display={{ base: "none", md: "block" }}>
                        <Text fontSize="sm" fontWeight="medium">
                            James Mensah
                        </Text>
                        <Text fontSize="xs" opacity={0.8}>
                            jamesmensah@gmail.com
                        </Text>
                    </Box>
                </Flex>
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

function NavItem({ icon, label, onClick, isActive, color }: NavItemProps) {
    return (
        <Button
            variant="ghost"
            justifyContent={{ base: "center", md: "flex-start" }}
            px={3}
            py={3}
            borderRadius="md"
            onClick={onClick}
            bg={isActive ? "whiteAlpha.200" : "transparent"}
            _hover={{ bg: "whiteAlpha.200" }}
            color={color || "white"}
            w="full"
            h="auto"
        >
            <Icon as={icon} boxSize={5} mr={{ base: 0, md: 2 }} />
            <Text display={{ base: "none", md: "block" }}>{label}</Text>
        </Button>
    )
}

