"use client"
import PropertiesPage from "@/components/containers/properties-page";

export default function HomePage(){
    return (
        <PropertiesPage onNavigate={function(page: "properties" | "create-estate" | "view-estate", estateId?: string): void {
            throw new Error("Function not implemented.");
        } } />
    );
}