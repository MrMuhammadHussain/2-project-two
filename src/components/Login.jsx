import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={"container.xl"} h={"100%"} p={"16"}>

            <form>

                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"} >
                    <Heading alignSelf={"center"}>Welcome Back</Heading>
                    <Input placeholder='Enter Email Here' type={"email"} required focusBorderColor={"purple.400"} />

                    <Input placeholder='Password' type={'password'} required focusBorderColor={"purple.400"} />
                    <Button variant={"link"} colorScheme={"purple"} alignSelf={"flex-end"}> <Link to={"/forgetpassword"}>Forget Password?</Link></Button>
                    <Button colorScheme={"purple"} type={"submit"}>Login</Button>
                    <Text textAlign={"right"} >New User ?{" "} <Button variant={"link"} colorScheme={"purple"} alignSelf={"flex-end"}> <Link to={"/singup"}>Singup</Link></Button></Text>


                </VStack>
            </form>

        </Container>
    )
}

export default Login