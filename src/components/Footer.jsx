import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiFillFacebook, AiFillGithub, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"sm"} textTransform={"uppercase"} textAlign={["center","left"]}>
            Type you want
          </Heading>
          <HStack borderBottom={"2px solid white "} py={"2"} >
            <Input placeholder='Enter your mail here' border={"none"} borderRadius={"10"} focusBorderColor="none" />
            <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"} >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}>
          <Heading textAlign={"center"} textTransform={"uppercase"} >
            website Name
          </Heading>
          <Text>All Right Recived Ⓒ </Text>

        </VStack>

        <VStack w={"full"} >
          <Heading size={"md"} textTransform={"uppercase"}>
          Social Media
          </Heading>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="http://www.github.com/mrmuhammadhussain" target="_blank="><AiFillGithub size={"20"} />  </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="http://www.youtube.com" target="_blank="> <AiFillYoutube size={"20"} /> </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="http://www.facebook.com" target="_blank="><AiFillFacebook size={"20"} /> </a>
          </Button>
        </VStack>
      </Stack>

    </Box>
  )
}

export default Footer