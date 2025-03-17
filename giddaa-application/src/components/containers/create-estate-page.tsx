"use client"
import type React from "react"
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Image,
    Heading,
    Input,
    Select,
    Text,
    Textarea,
    useToast, Divider,
    HStack,
    IconButton,
} from "@chakra-ui/react"
import {useState} from "react"
import {Edit2, Trash} from "lucide-react"

type CreateEstatePageProps = {
    onNavigate: (page: "properties" | "create-estate" | "view-estate") => void
}

export default function CreateEstatePage({onNavigate}: CreateEstatePageProps) {
    const toast = useToast()
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
        images: [] as string[],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
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
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setFormData({...formData, images: [...formData.images, ...files]});
        }
    };

    const handleDelete = (index: number) => {
        setFormData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index), // Remove image from list
        }));
    };

    const handleEdit = (index: number) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (e: any) => {
            const file = e.target.files[0];
            if (file) {
                const newImageURL = URL.createObjectURL(file);
                setFormData((prevData) => {
                    const newImages = [...prevData.images];
                    newImages[index] = newImageURL; // Replace the image
                    return {...prevData, images: newImages};
                });
            }
        };
        fileInput.click();
    };

    return (
        <Box p={4} maxW="1200px" mx="auto">
            <Flex align="center" mb={6}>
                <Button
                    onClick={() => onNavigate("properties")}
                    variant="outline"
                    w='81px'
                    h='32px'
                    borderRadius="5px"
                    border='2px solid #335F32'
                    bg='#FFFFFF'
                    color="#335F32"
                    _hover={{bg: "#335F32", color: "#FFFFFF"}}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    fontWeight={700}
                    fontSize='13px'
                    cursor='pointer'
                >
                    <Image src="/img/buttonArrow.png" alt="Back" w='12px' h='12px' _hover={{color: "#FFFFFF"}}/>
                    Back
                </Button>
                <Heading size="md" ml={4}>
                    Creating Estate
                </Heading>
            </Flex>

            <Flex mb={6}>
                <Text fontSize="sm" color='#000000'>Estates</Text>
                <Text fontSize="sm" color="gray.600" mx={2}>&gt;</Text>
                <Text fontSize="sm" color='#000000'>Create Estate</Text>
            </Flex>
            <Box mb='4%' mt='-2%'><Divider/></Box>


            <form onSubmit={handleSubmit}>
                <Box
                    borderWidth="1px" borderRadius="md" p={6} mb={6} borderStyle="dashed" borderColor="gray.300"
                    bg="gray.50"
                >
                    <Input type="file" multiple onChange={handleFileUpload} hidden id="imageUpload"/>

                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <Flex direction="column" align="center">
                            <Image
                                src="/img/addVideo.png"
                                alt="addVideo"
                                w={{base: "20px", md: "48px"}}
                                h={{base: "22px", md: "50px"}}
                                mt="10px"
                                cursor="pointer"
                            />
                            <Text
                                color="#335F32"
                                fontWeight={700}
                                fontSize="10px"
                                mb={10}
                            >
                                ADD ESTATE IMAGES
                            </Text>
                        </Flex>
                    </label>
                </Box>

                <HStack spacing={4} overflowX="auto" mb='4%'>
                    {formData.images.map((img, idx) => (
                        <Box key={idx} position="relative">
                            <Image
                                src={img || "/placeholder.svg"}
                                alt={`Thumbnail ${idx + 1}`}
                                width={100}
                                height={100}
                                borderRadius="5px"
                                objectFit="cover"
                            />

                            <Flex
                                position="absolute"
                                bottom="20px"
                                left="35%"
                                p={1}
                                border='none'
                                gap={2}
                            >
                                <IconButton
                                    icon={<Edit2 size={12}/>}
                                    aria-label="Edit Image"
                                    onClick={() => handleEdit(idx)}
                                    bg="#FFFFFF"
                                    borderRadius='8px'
                                    border='none'
                                    sx={{
                                        width: "20px",
                                        height: "20px",
                                        minWidth: "20px",
                                        minHeight: "20px",
                                        padding: "2px",
                                    }}
                                />
                                <IconButton
                                    icon={<Trash size={12} color="red"/>}
                                    aria-label="Delete Image"
                                    onClick={() => handleDelete(idx)}
                                    bg="#FFFFFF"
                                    borderRadius='8px'
                                    border='none'
                                    sx={{
                                        width: "20px",
                                        height: "20px",
                                        minWidth: "20px",
                                        minHeight: "20px",
                                        padding: "2px",
                                    }}
                                />
                            </Flex>

                            <Text
                                fontSize="10px"
                                fontWeight="bold"
                                textAlign="center"
                                color="#335F32"
                                mt={1}
                            >
                                {idx % 2 === 0 ? "Bedroom 1" : "Parlor"}
                            </Text>
                        </Box>
                    ))}
                </HStack>


                <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={6} mb={4}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input borderRadius='100px' name="name" value={formData.name} onChange={handleChange}
                               placeholder="N350,000"/>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>State</FormLabel>
                        <Select borderRadius='100px' name="state" value={formData.state} onChange={handleChange}>
                            <option value="Germany">Germany</option>
                            <option value="Nigeria">Nigeria</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Select borderRadius='100px' name="city" value={formData.city} onChange={handleChange}>
                            <option value="Germany">Germany</option>
                            <option value="Abuja">Abuja</option>
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input borderRadius='100px' name="address" value={formData.address} onChange={handleChange}
                               placeholder="N350,000"/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Popular Landmark</FormLabel>
                        <Input
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            borderRadius='100px'
                            placeholder="What's the asking price of this property?"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Estate Land (In Hectares)</FormLabel>
                        <Input borderRadius='100px' name="landSize" value={formData.landSize} onChange={handleChange}
                               placeholder="N350,000"/>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Completion Status</FormLabel>
                        <Select borderRadius='100px' name="completionStatus" value={formData.completionStatus}
                                onChange={handleChange}>
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
                            borderRadius='100px'
                            placeholder="Add a Youtube Video Link"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Number of Floors</FormLabel>
                        <Input borderRadius='100px' name="floors" value={formData.floors} onChange={handleChange}
                               placeholder="4" type="number"/>
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

                <Flex justify="center" gap={4}>
                    <Button borderRadius='100px' variant="outline" onClick={() => onNavigate("properties")}>
                        Cancel
                    </Button>
                    <Button borderRadius='100px' colorScheme="green" type="submit">
                        Create Estate
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}

