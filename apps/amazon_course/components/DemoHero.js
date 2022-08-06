import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Image } from "@chakra-ui/react";

const App = () => (
  <div className="App">
    <Parallax pages={5}>
      <ParallaxLayer offset={0} speed={0.2} style={{ height: "auto" }}>
       <Image 
         src = {'/static/space_img.jpg'}
       />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={0.5} style={{ height: "auto" }}>
        <Image 
         src = {'/static/planet.png'}
        />
       </ParallaxLayer>
    </Parallax>
    <div>
        lorem loream
    </div>
      
  </div>
);

export default App;
