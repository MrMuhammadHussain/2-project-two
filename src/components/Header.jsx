import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,Button, useDisclosure } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"


const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure()
    return (
        <>
<Button
pos={"fixed"} top={"4"} left={"4"}
colorScheme={"purple"} p={"0"} w={"10"} h={"10"} borderRadius={"full"} onClick={onOpen}  >
    
    <BiMenuAltLeft size={"18"}/>
</Button>
        <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
            <DrawerOverlay/>
            <DrawerContent>
                
            <div>sadsad</div>
            </DrawerContent>



        </Drawer>
        </>
    )
}

export default Header