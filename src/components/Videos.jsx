import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const VideosArr = ['https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
  'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf', 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78', 'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
  'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf', 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78']
const Videos = () => {
  const [VideoSrc, setVideoSrc] = useState(VideosArr[0])

  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video controls controlsList="nodownload" src={VideoSrc} style={{
          width: "100%"
        }}>

        </video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading>Video 1</Heading>
          <Text>Sample Video for testing</Text>
        </VStack>

      </VStack>
      <VStack w={["full", "xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}>
        {
          VideosArr.map((item,index)  =>( 
<Button variant={"ghost"} colorScheme={"purple"} onClick={()=>setVideoSrc (item) }key={index} >Video one {index + 1}  </Button>
          )) }
      </VStack>

    </Stack>
  )
}

export default Videos