// "use client"
// import { useState } from "react";
// import { Flex, Box } from "@chakra-ui/react";
// import Sidebar from "./sidebar";
// import PropertiesPage from "./properties-page";
// import CreateEstatePage from "./create-estate-page";
// import ViewEstatePage from "./view-estate-page";
//
// type PageType = "properties" | "create-estate" | "view-estate";
//
// export default function DashboardLayout() {
//     const [currentPage, setCurrentPage] = useState<PageType>("properties");
//     const [selectedEstate, setSelectedEstate] = useState<string | null>(null);
//
//     const handleNavigate = (page: PageType, estateId?: string) => {
//         setCurrentPage(page);
//         if (estateId) {
//             setSelectedEstate(estateId);
//         }
//     };
//
//     return (
//         <Flex h="100vh" w="100vw" bg="white">
//             <Box w="250px" minW="250px" bg="green.700" h="full">
//                 <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
//             </Box>
//
//             <Box flex="1" overflowY="auto" p={6}>
//                 {currentPage === "properties" && <PropertiesPage onNavigate={handleNavigate} />}
//                 {currentPage === "create-estate" && <CreateEstatePage onNavigate={handleNavigate} />}
//                 {currentPage === "view-estate" && <ViewEstatePage estateId={selectedEstate} onNavigate={handleNavigate} />}
//             </Box>
//         </Flex>
//     );
// }


"use client";
import { useState } from "react";
import { Flex, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar";
import PropertiesPage from "@/components/containers/properties-page";
import CreateEstatePage from "./create-estate-page";
import ViewEstatePage from "@/components/containers/view-estate-page";


type PageType = "properties" | "create-estate" | "view-estate";
interface DashboardLayoutProps {
    user: {
        name: string;
        email: string;
    };
}

export default function DashboardLayout({ user }: DashboardLayoutProps) {
    const [currentPage, setCurrentPage] = useState<PageType>("properties");
    const [selectedEstate, setSelectedEstate] = useState<string | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Responsive Sidebar Visibility
    const isSidebarVisible = useBreakpointValue({ base: false, lg: true });

    const handleNavigate = (page: PageType, estateId?: string) => {
        setCurrentPage(page);
        if (estateId) {
            setSelectedEstate(estateId);
        }
        onClose(); // Close sidebar on mobile after navigation
    };

    return (
        <Flex h="100vh" w="100vw" bg="white">
            {isSidebarVisible && (
                <Box w="250px" minW="250px" bg="green.700" h="full">
                    <Sidebar onNavigate={handleNavigate} currentPage={currentPage} name={user.name} email={user.email} />
                </Box>
            )}

            {/* Menu button for mobile */}
            {!isSidebarVisible && (
                <IconButton
                    icon={<FiMenu />}
                    aria-label="Open menu"
                    position="absolute"
                    top="10px"
                    left="10px"
                    onClick={onOpen}
                    bg="green.700"
                    color="white"
                    _hover={{ bg: "green.800" }}
                />
            )}

            {/* Sidebar Drawer for small screens */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="green.700">
                    <DrawerCloseButton color="white" />
                    <Sidebar onNavigate={handleNavigate} currentPage={currentPage} name={user.name} email={user.email} />
                </DrawerContent>
            </Drawer>

            {/* Main content */}
            <Box flex="1" overflowY="auto" p={6}>
                {currentPage === "properties" && <PropertiesPage onNavigate={handleNavigate} />}
                {currentPage === "create-estate" && <CreateEstatePage onNavigate={handleNavigate} />}
                {currentPage === "view-estate" && <ViewEstatePage estateId={selectedEstate} onNavigate={handleNavigate} />}
            </Box>
        </Flex>
    );
}