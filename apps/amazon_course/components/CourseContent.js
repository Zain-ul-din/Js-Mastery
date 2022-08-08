import { 
     Center ,
     Stack,
     Text,
     Divider,
     Flex,
     Box
 } from "@chakra-ui/react"

const outline = [
  {title : "Intro To Drop-Shiping"  , duration : "(2h 40m)"} ,
  {title : "Product Hunting" , duration : "(5h 14m)"},
  {title : "Order Processing" , duration : "(3h 5m)"},
  {title : "Resolving Complaints" , duration : "(1h 55m)"},
  {title : "Returns & Refunds" , duration : "(6h 18m)"},
  {title : "Inventory Management" , duration : "(4h 30m)"},
  {title : "Customer Services" , duration : "(2h 45m)"},
  {title : "Shipment & Tracking" , duration : "(3h 5m)"},
  {title : "Account Handling" , duration : "(0h 50m)"},
  {title : "Tips & Tricks" , duration : "(1h 40m)"} ,
  {title : "Finding Clients as a Freelancer (Bonus) " , duration : "(5h 40m)"}
]

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
          <Flex width={'100%'} height = {'100%'} px = {'10%'} justifyContent = {'center'}> <Divider/> </Flex>
          
          {outline && outline.map ((title , idx) => {
            return <Title key={idx} title={title} idx = {idx}/>
          })}
          
        </>
    )
}

import {
  FcAdvance ,
  FcBinoculars ,
  FcBarChart ,
  FcAssistant ,
  FcCurrencyExchange ,
  FcDataConfiguration ,
  FcBusinessman ,
  FcShipped ,
  FcSettings ,
  FcAnswers ,
  FcConferenceCall
} from 'react-icons/fc'

const ICONS = [
  <FcAdvance  key = {0}/> ,
  <FcBinoculars key = {1}/> ,
  <FcBarChart key = {2}/> ,
  <FcAssistant key = {3}/> ,
  <FcCurrencyExchange key = {4}/> ,
  <FcDataConfiguration key = {5}/> ,
  <FcBusinessman key = {6}/> ,
  <FcShipped key = {7}/> ,
  <FcSettings key = {8}/> ,
  <FcAnswers key = {9}/> ,
  <FcConferenceCall key = {10}/>
]

function Title ({ idx , title}) {
  return (
    <>
      <Center px = {'10%'} mt = {2}>
            <Box 
             width={'100%'}
             height = {{xl : '40px' , lg : '40px' , sm : '35px' , base : '30px' }}
             bgColor = {'gray.700'}
             alignItems = {'center'}
             px = {'5%'}
             borderRadius = {'base'}
             boxShadow = 'lg'
             _hover = {{
              opacity : '70%'
             }}
            >
              <Stack direction={'row'}>
               <Text  fontWeight = {'600'} 
               fontSize = {{xl : '2xl' , lg : '2xl' , md : '1xl' , sm : '1xl' , base : 'sm'}}
                py = {'2'}> {ICONS[idx]} </Text>  
               <Text  
                fontWeight = {'600'} 
                fontSize = {{xl : '2xl' , lg : '2xl' , md : '1xl' , sm : '1xl' , base : 'sm'}}
               _hover = {{
                opacity : '100%' ,
                boxShadow : 'xl'
               }}>
                {title.title}
               </Text>
               <Text
               fontWeight = {'600'} fontSize = {{xl : '2xl' , lg : '2xl' , md : '1xl' , sm : '1xl' , base : 'sm'}} color = {'gray.500'}
               >{title.duration}</Text>
              </Stack>
            </Box>
          </Center>
    </>
  )
}