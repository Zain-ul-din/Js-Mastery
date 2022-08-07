
import { 
     Center ,
     Stack,
     Text,
     Divider,
     Flex
 } from "@chakra-ui/react"

export default function CourseContent () {
    return (
        <>
          <Center>
            <Stack py = {'10'}>
            <Text fontSize={{xl : '4xl' , lg : '4xl' , md : '3xl' , sm : '2xl' , base : '2xl'}}  fontWeight = {'extrabold'} textAlign = {'center'}>
               The Ultimate Resource to Prepare for Amazon Services 
            </Text>
            <Text fontSize={'2xl'} textAlign = {'center'}>
            Everything you need, in one streamlined platform.
            </Text>
            </Stack>
          </Center>

          {/* Course Content */}
          <Flex width={'100%'} height = {'100%'} px = {'10%'} >
            <Divider/>
          </Flex>
        </>
    )
}