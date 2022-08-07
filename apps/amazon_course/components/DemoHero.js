import { useState , useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Image , Flex, Center , Text} from "@chakra-ui/react";

const App = () => {

    const [windowWidth , setWindowWidth] = useState ()

    useEffect(() => {
        setWindowWidth (window.screen.height)
    }, []);

    return (
  <div className="App">
    <Parallax pages={5}>
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
      <ParallaxLayer offset={0.8} speed={0.2} style={{ height: "auto" }}>
      

        <Flex bg= {'grey.800'} width = {'100%'} p = {0} m = {0} position = {'absolute'}>
         
         
         <Image 
          src = {'/static/planet.png'}
          width = {'100%'}
          height = {'100%'}
         />
        
        </Flex>
       </ParallaxLayer>
       <Flex height={'400px'}></Flex>
       <ParallaxLayer offset={0.6} speed = {0.3} style = {{height:'auto'}}>
        <Center>
         <Text > Hello World </Text>
        </Center>
       </ParallaxLayer>
    </Parallax>
    
    
  </div>
)};

export default App;
