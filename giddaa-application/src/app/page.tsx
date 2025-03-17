"use client";
import Navbar from "@/components/containers/landing-page/navbar";
import Hero from "@/components/containers/landing-page/hero";
import Footer from "@/components/containers/landing-page/footer";
import GetStarted from "@/components/containers/landing-page/get-started-section";
import AboutUsSection from "@/components/containers/landing-page/about-us-section";
import TestimonialsSection from "@/components/containers/landing-page/testimonials-section";
import WhyGiddaaSection from "@/components/containers/landing-page/why-giddaa-section";
import PartnersSection from "@/components/containers/landing-page/partners-section";
import GaddaaProducts from "@/components/containers/landing-page/gaddaa-products";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const bgColor = useColorModeValue("white", "gray.800");

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return
    }

    return (
        <Box bg={bgColor} minH="100vh">
            <Navbar />
            <Hero />
            <GaddaaProducts />
            <PartnersSection />
            <WhyGiddaaSection />
            <TestimonialsSection />
            <AboutUsSection />
            <GetStarted />
            <Footer />
        </Box>
    );
}