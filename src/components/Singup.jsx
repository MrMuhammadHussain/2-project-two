import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Singup = () => {
    return (
        <Container maxW={"container.xl"} h={"100%"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"} >
                    <Heading alignSelf={"center"}>Website Name</Heading>
                    <Avatar  alignSelf={"center"} boxSize={"32"}/>
                    <Input placeholder='Enter Name Here' type={"text"} required focusBorderColor={"purple.400"} />
                    <Input placeholder='Enter Email Here' type={"email"} required focusBorderColor={"purple.400"} />

                    <Input placeholder='Password' type={'password'} required focusBorderColor={"purple.400"} />
                  
                    <Button colorScheme={"purple"} type={"submit"}>Singup</Button>
                    <Text textAlign={"right"} >Already User ?{" "} <Button variant={"link"} colorScheme={"purple"} alignSelf={"flex-end"}> <Link to={"/login"}>Login</Link></Button></Text>


                </VStack>
            </form>

        </Container>
    )
}

export default Singup