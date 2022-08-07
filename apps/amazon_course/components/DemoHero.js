import { useState , useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Image , Flex, Center , Text, Stack } from "@chakra-ui/react";

import GetStarted from "./GetStarted";

const App = () => {

    const [windowWidth , setWindowWidth] = useState ()

    useEffect(() => {
        setWindowWidth (window.screen.height)
    }, []);

    return (
  <div className="App">
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1} style={{ height: "auto" }}>
        <Flex position={'relative'} justifyContent = {'center'}>
         <Image 
          src = {'/static/space_img.jpg'}
          height = {windowWidth}
          width = {'100%'}
         />
         <Text 
          position={'absolute'}
          top = {'5%'}
          bgGradient='linear(to right, #03001e, #7303c0, #ec38bc, #fdeff9)' 
          bgClip='text'
          fontSize={{xl :'5xl' , lg : '5xl' , md : '4xl' , sm : '4xl' , base : '4xl'}}
          textAlign={'center'}
          fontWeight='extrabold'
          px = {{xl : '20%' , lg : '20%' , md : '20%' , 'sm' : '10%' , base : '5%'}}
          className = {'neonText'}
        >
            Confidently Start Working With Amazon Services And Start Earning Like a Pro
         </Text>
         <Image 
          position = {'absolute'}
          src = {'/static/amazon.png'}
          top = {'40%'}
          height = {'200px'}
          width = {'200px'}
         />
         {/* <Flex height={'120px'} width = {'100%'} bg = {'red'} position = {'absolute'} bottom = {'0%'}>
            {`  `}
         </Flex> */}
        </Flex>
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={0.5} style={{ height: "auto" }}>
      
        <Flex bg= {'grey.800'} width = {'100%'} p = {0} m = {0} position = {'absolute'}>
         
         <Image 
          src = {'/static/planet.png'}
          width = {'100%'}
          height = {'100%'}
         />
        
        </Flex>
       </ParallaxLayer>
       <Flex height={'600px'}></Flex>
       <ParallaxLayer offset={0.2} speed = {0.3} style = {{height:'auto'}}>
          <Stack>
        <Center>
         <Text 
          fontSize={'4xl'} 
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
         > Introductory </Text>
        </Center>
        <Center>
         <Text p = {5} px = {5} textAlign = {'center'}>
          <b className="color-amazon">Amazon</b> is the most influential technology of 2022 people are earning lots of money from it now, it's your time to earn.
          This course is going to teach by amazon experts who earn more than <b className="color-light_green"> 50k$ </b> per month.
          This course is going to be practical base, with no theory at all. You'll learn different strategies, tips & tricks to make money from amazon that will help  you to build your own business and <b >You can be the next Entrepreneur.</b>
         </Text>
         </Center>
         </Stack>
         <GetStarted/>
       </ParallaxLayer>

    </Parallax>
    
    
  </div>
)};

export default App;
