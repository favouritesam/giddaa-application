"use client"
import { useState } from "react"
import CreateEstatePage from "@/components/containers/create-estate-page";
import ViewEstatePage from "@/components/containers/view-estate-page";
import Sidebar from "@/components/containers/sidebar";
import PropertiesPage from "@/components/containers/properties-page";


type PageType = "properties" | "create-estate" | "view-estate"

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState<PageType>("properties")
    const [selectedEstate, setSelectedEstate] = useState<string | null>(null)

    const handleNavigate = (page: PageType, estateId?: string) => {
        setCurrentPage(page)
        if (estateId) {
            setSelectedEstate(estateId)
        }
    }

    return (
        <div className="flex h-screen bg-white">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} name={""} email={""} />
            <div className="flex-1 overflow-auto">
                {currentPage === "properties" && <PropertiesPage onNavigate={handleNavigate} />}
                {currentPage === "create-estate" && <CreateEstatePage onNavigate={handleNavigate} />}
                {currentPage === "view-estate" && <ViewEstatePage estateId={selectedEstate} onNavigate={handleNavigate} />}
            </div>
        </div>
    )
}

