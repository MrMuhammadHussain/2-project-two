import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"


const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                pos={"fixed"} top={"4"} left={"4"}
                colorScheme={"purple"} p={"0"} w={"10"} h={"10"} borderRadius={"full"}
                onClick={onOpen}  >

                <BiMenuAltLeft size={"18"} />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Website Name</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button variant={"ghost"} colorScheme={"purple"}>
                                <Link to={"/"} >Home</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}>
                                <Link to={"/videos"} >Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}>
                                <Link to={"/videos?category=free"} >Free Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}>
                                <Link to={"/upload"} >Upload Video</Link>
                            </Button>

                        </VStack>
                        <HStack pos={"absolute"} bottom={"10"} left={"10"} >
                            <Button colorScheme={"purple"}>
                                <Link to={""} >Login</Link>
                            </Button>
                            <Button variant={"outline"} colorScheme={"purple"}>
                                <Link to={""} >Singup</Link>
                            </Button>
                        </HStack>



                    </DrawerBody>

                </DrawerContent>



            </Drawer>
        </>
    )
}

export default Header