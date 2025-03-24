// "use client"
// import PropertiesPage from "@/components/containers/properties-page";
//
// export default function HomePage(){
//     return (
//         <PropertiesPage onNavigate={function(page: "properties" | "create-estate" | "view-estate", estateId?: string): void {
//             throw new Error("Function not implemented.");
//         } } />
//     );
// }

"use client";

import PropertiesPage from "@/components/containers/properties-page";

export default function HomePage() {
    return (
        <PropertiesPage
            onNavigate={(page, estateId) => {
                console.log("Navigating to:", page, "Estate ID:", estateId);
            }}
        />
    );
}

