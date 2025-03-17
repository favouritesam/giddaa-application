"use client"
import { useState } from "react"
import type React from "react"
import {
    Box,
    Flex,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Avatar,
    ChakraProvider,
    extendTheme,
    IconButton,
    HStack,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Divider,
} from "@chakra-ui/react"
import { Search2Icon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useRouter } from "next/navigation"

const navbarTheme = extendTheme({
    colors: {
        brand: {
            green: "#1B5E20",
            lightGreen: "#2E7D32",
        },
        gray: {
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            500: "#6B7280",
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "medium",
            },
        },
        Menu: {
            baseStyle: {
                list: {
                    borderRadius: "md",
                    boxShadow: "sm",
                },
            },
        },
    },
})

interface NavLinkProps {
    children: React.ReactNode
    isActive: boolean
    hasDropdown?: boolean
    onClick: () => void
}

const NavLink: React.FC<NavLinkProps> = ({ children, isActive, hasDropdown, onClick }) => (
    <Menu>
        <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={hasDropdown ? <ChevronDownIcon /> : undefined}
            position="relative"
            color={isActive ? "#335F32" : "gray.700"}
            _hover={{ color: "none" }}
            fontSize="14px"
            fontWeight="400"
            px={2}
            onClick={onClick}
            _after={
                isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "2px",
                        bg: "#335F32",
                    }
                    : undefined
            }
        >
            {children}
        </MenuButton>
        {hasDropdown && (
            <MenuList>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </MenuList>
        )}
    </Menu>
)

export default function Navbar() {
    const [activeItem, setActiveItem] = useState<string>("Shortlets")
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleGetStarted = () => {
        router.push("/login")
        console.log('user started')
    }

    const navItems = [
        { label: "Buy", hasDropdown: false },
        { label: "Shortlets", hasDropdown: false },
        { label: "Sell", hasDropdown: false },
        { label: "Invest", hasDropdown: false },
        { label: "Services", hasDropdown: false },
        { label: "Enterprise", hasDropdown: false },
        { label: "Agents & Realtors", hasDropdown: false },
    ]

    return (
        <ChakraProvider theme={navbarTheme}>
            <Box as="nav" bg="white" py={2} borderBottom="1px" borderColor="gray.200" position="sticky" top={0} zIndex={1000}>
                <Flex maxW="full" mx="auto" px={{ base: 4, md: 10 }} justify="space-between">
                    <Box>
                        <Image src="/img/GreenLogo.png" alt="logo" w="99.91px" h="39px" objectFit="contain" />
                    </Box>

                    {/* Mobile menu button */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        variant="ghost"
                        display={{ base: "flex", lg: "none" }}
                        onClick={onOpen}
                    />

                    {/* Desktop navigation */}
                    <Flex flex="1" justify="flex-end" align="center" display={{ base: "none", lg: "flex" }}>
                        <Flex alignItems="center" gap={{ md: 4, lg: 10 }}>
                            <Box w="200px" h="39px" bg="#FFFFFF" borderRadius="100px" border="1px solid #F0F0F0">
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <Search2Icon color="gray.500" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Search for anything..."
                                        borderRadius="full"
                                        bg="transparent"
                                        _placeholder={{ color: "gray.500" }}
                                        _focus={{ bg: "white", borderColor: "#335F32" }}
                                        fontWeight={400}
                                        fontSize={12}
                                        color="#4B4B4B"
                                        border="none"
                                        outline="none"
                                        cursor="pointer"
                                        h="39px"
                                    />
                                </InputGroup>
                            </Box>

                            <Flex align="center" gap={1} _hover={{ color: "none" }}>
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        isActive={activeItem === item.label}
                                        hasDropdown={item.hasDropdown}
                                        onClick={() => setActiveItem(item.label)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}

                                <HStack spacing={2} align="center">
                                    <Box w="1px" h="40px" bg="#D9D9D9" />
                                    <Text fontWeight={700} fontSize="12px" color="#335F32">
                                        Refer & Earn
                                    </Text>
                                    <Box w="1px" h="40px" bg="#D9D9D9" />
                                </HStack>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        variant="ghost"
                                        rightIcon={<ChevronDownIcon />}
                                        ml={2}
                                        fontSize="12px"
                                        fontWeight="400"
                                        border="1px solid #D9D9D9"
                                        borderRadius="100px"
                                        w="84px"
                                        h="31px"
                                    >
                                        <Flex align="center">🇺🇸 USD</Flex>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>🇺🇸 USD</MenuItem>
                                        <MenuItem>🇪🇺 EUR</MenuItem>
                                        <MenuItem>🇬🇧 GBP</MenuItem>
                                    </MenuList>
                                </Menu>

                                <Menu>
                                    <MenuButton as={IconButton} icon={<Avatar size="sm" />} variant="ghost" ml={2} />
                                    <MenuList>
                                        <MenuItem>Profile</MenuItem>
                                        <MenuItem>Settings</MenuItem>
                                        <MenuItem onClick={handleGetStarted}>Login</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <Image src="/img/GreenLogo.png" alt="logo" w="80px" h="32px" objectFit="contain" />
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch" mt={4}>
                            {/* Mobile Search */}
                            <Box w="full" bg="#FFFFFF" borderRadius="100px" border="1px solid #F0F0F0" p={2}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <Search2Icon color="gray.500" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Search for anything..."
                                        borderRadius="full"
                                        bg="transparent"
                                        _placeholder={{ color: "gray.500" }}
                                        border="none"
                                        fontSize={12}
                                    />
                                </InputGroup>
                            </Box>


                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    w="full"
                                    fontSize="14px"
                                    fontWeight={activeItem === item.label ? "600" : "400"}
                                    color={activeItem === item.label ? "#335F32" : "gray.700"}
                                    onClick={() => {
                                        setActiveItem(item.label)
                                        onClose()
                                    }}
                                    rightIcon={item.hasDropdown ? <ChevronDownIcon /> : undefined}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            <Divider />

                            <Button variant="ghost" justifyContent="flex-start" w="full" fontWeight={700} color="#335F32">
                                Refer & Earn
                            </Button>

                            <Divider />

                            {/* Mobile Currency Selector */}
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    variant="outline"
                                    rightIcon={<ChevronDownIcon />}
                                    fontSize="12px"
                                    fontWeight="400"
                                    border="1px solid #D9D9D9"
                                    borderRadius="100px"
                                    w="120px"
                                >
                                    <Flex align="center">🇺🇸 USD</Flex>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>🇺🇸 USD</MenuItem>
                                    <MenuItem>🇪🇺 EUR</MenuItem>
                                    <MenuItem>🇬🇧 GBP</MenuItem>
                                </MenuList>
                            </Menu>

                            <Button
                                colorScheme="green"
                                bg="#335F32"
                                onClick={() => {
                                    handleGetStarted()
                                    onClose()
                                }}
                                mt={4}
                            >
                                Login
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </ChakraProvider>
    )
}