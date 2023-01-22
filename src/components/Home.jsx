import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/01.jpg"
import img2 from "../assets/02.webp"
import img3 from "../assets/03.jpg"
import img4 from "../assets/04.jpg"
import img5 from "../assets/05.png"

const HeadingOption = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "2xl",
    borderRadius: "20px"
}

const Home = () => {
    return (
        <Box>
            <Mycarousel />
            <Container maxW={"container.xl"} minH={"100vh"} p={"16"} >
                <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>
                    Services
                </Heading>
                <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
                    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo eligendi cum. Nam ducimus optio odio libero rem, hic velit repellendus nesciunt ab? Deserunt, minus. Laboriosam repellendus perferendis quas repellat.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi tenetur aliquam, optio repellendus voluptates, asperiores ea nostrum unde tempore officia distinctio aliquid velit quisquam rem porro saepe nesciunt dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi debitis sequi facilis velit at iure facere maxime non, doloribus quibusdam? Nihil asperiores aliquid beatae natus voluptatem magnam voluptatum expedita.
                    </Text>

                </Stack>


            </Container>

        </Box>
    )
};
const Mycarousel = () => {
    return (

        <Carousel autoPlay infiniteLoop interval={3000} showArrows={false} showStatus={false}  >
            <Box w={"full"} h={"100vh"} >
                <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOption}>Type You Want</Heading>
            </Box>

            <Box w={"full"} h={"100vh"} >
                <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
                <Heading bgColor={"whiteAlpha.700"} color={"black"} {...HeadingOption}>Type You Want</Heading>
            </Box>
            <Box w={"full"} h={"100vh"} >
                <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
                <Heading bgColor={"blackAlpha.700"} color={"white"} {...HeadingOption}>Type You Want</Heading>
            </Box>
            <Box w={"full"} h={"100vh"} >
                <Image src={img4}  h={"full"} w={"full"} objectFit={"cover"}/>
                <Heading bgColor={"blackAlpha.700"} color={"white"} {...HeadingOption}>Type You Want</Heading>
            </Box>

        </Carousel>
    )
}

export default Home