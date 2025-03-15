"use client"
import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import PropertiesPage from "./properties-page";
import CreateEstatePage from "./create-estate-page";
import ViewEstatePage from "./view-estate-page";

type PageType = "properties" | "create-estate" | "view-estate";

export default function DashboardLayout() {
    const [currentPage, setCurrentPage] = useState<PageType>("properties");
    const [selectedEstate, setSelectedEstate] = useState<string | null>(null);

    const handleNavigate = (page: PageType, estateId?: string) => {
        setCurrentPage(page);
        if (estateId) {
            setSelectedEstate(estateId);
        }
    };

    return (
        <Flex h="100vh" w="100vw" bg="white">
            {/* Sidebar */}
            <Box w="250px" minW="250px" bg="green.700" h="full">
                <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            </Box>

            {/* Main Content */}
            <Box flex="1" overflowY="auto" p={6}>
                {currentPage === "properties" && <PropertiesPage onNavigate={handleNavigate} />}
                {currentPage === "create-estate" && <CreateEstatePage onNavigate={handleNavigate} />}
                {currentPage === "view-estate" && <ViewEstatePage estateId={selectedEstate} onNavigate={handleNavigate} />}
            </Box>
        </Flex>
    );
}
