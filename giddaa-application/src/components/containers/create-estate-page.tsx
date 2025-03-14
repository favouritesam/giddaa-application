"use client"

import type React from "react"

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Icon,
    Input,
    Select,
    Text,
    Textarea,
     useToast,
} from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { MdAdd, MdArrowBack } from "react-icons/md"

type CreateEstatePageProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
}

export default function CreateEstatePage({ onNavigate }: CreateEstatePageProps) {
    const toast = useToast()
    const [images, setImages] = useState<string[]>([
        "/placeholder.svg?height=100&width=100",
        "/placeholder.svg?height=100&width=100",
    ])
    const [formData, setFormData] = useState({
        name: "",
        state: "Germany",
        city: "Germany",
        address: "",
        landmark: "",
        landSize: "",
        completionStatus: "Completed",
        videoUrl: "",
        floors: "",
        description: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast({
            title: "Estate created",
            description: "Your estate has been created successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
        onNavigate("properties")
    }

    return (
        <Box p={4} maxW="1200px" mx="auto">
            {/* Header */}
            <Flex align="center" mb={6}>
                <Button leftIcon={<Icon as={MdArrowBack} />} variant="ghost" onClick={() => onNavigate("properties")}>
                    Back
                </Button>
                <Heading size="md" ml={4}>
                    Creating Estate
                </Heading>
            </Flex>

            {/* Breadcrumb */}
            <Flex fontSize="sm" color="gray.600" mb={6}>
                <Text>Estates</Text>
                <Text mx={2}>&gt;</Text>
                <Text fontWeight="medium">Create Estate</Text>
            </Flex>

            <form onSubmit={handleSubmit}>
                {/* Image Upload Section */}
                <Box borderWidth="1px" borderRadius="md" p={6} mb={6} borderStyle="dashed" borderColor="gray.300" bg="gray.50">
                    <Flex direction="column" align="center" justify="center" h="100px">
                        <Icon as={MdAdd} boxSize={8} color="gray.500" />
                        <Text color="gray.500" mt={2}>
                            ADD ESTATE IMAGES
                        </Text>
                    </Flex>
                </Box>

                {/* Image Thumbnails */}
                <Flex gap={4} mb={6} overflowX="auto" pb={2}>
                    {images.map((img, index) => (
                        <Box key={index} position="relative" borderWidth="1px" borderRadius="md" overflow="hidden" minW="100px">
                            <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} width={100} height={100} />
                            <Text fontSize="xs" textAlign="center" py={1} bg="gray.100">
                                {index === 0 ? "Parlour" : `Bedroom ${index}`}
                            </Text>
                        </Box>
                    ))}
                </Flex>

                {/* Form Fields */}
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} mb={6}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="N350,000" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>State</FormLabel>
                        <Select name="state" value={formData.state} onChange={handleChange}>
                            <option value="Germany">Germany</option>
                            <option value="Nigeria">Nigeria</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Select name="city" value={formData.city} onChange={handleChange}>
                            <option value="Germany">Germany</option>
                            <option value="Abuja">Abuja</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input name="address" value={formData.address} onChange={handleChange} placeholder="N350,000" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Popular Landmark</FormLabel>
                        <Input
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            placeholder="What's the asking price of this property?"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Estate Land (In Hectares)</FormLabel>
                        <Input name="landSize" value={formData.landSize} onChange={handleChange} placeholder="N350,000" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Completion Status</FormLabel>
                        <Select name="completionStatus" value={formData.completionStatus} onChange={handleChange}>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Not Started">Not Started</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Video URL</FormLabel>
                        <Input
                            name="videoUrl"
                            value={formData.videoUrl}
                            onChange={handleChange}
                            placeholder="Add a Youtube Video Link"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Number of Floors</FormLabel>
                        <Input name="floors" value={formData.floors} onChange={handleChange} placeholder="4" type="number" />
                    </FormControl>
                </Grid>

                <FormControl mb={6} isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the estate"
                        rows={4}
                    />
                </FormControl>

                {/* Action Buttons */}
                <Flex justify="flex-end" gap={4}>
                    <Button variant="outline" onClick={() => onNavigate("properties")}>
                        Cancel
                    </Button>
                    <Button colorScheme="green" type="submit">
                        Create Estate
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}

