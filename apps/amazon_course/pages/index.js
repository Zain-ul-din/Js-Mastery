import { Button, Text } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import DemoHero from "../components/DemoHero"


export default function Home() {
  return (
    <>
    <NavBar />
    <DemoHero />
    
    {/* <Text size={'xl'} mt = {4}>
      Hello World
    </Text>

    <Button>
      Hello World
    </Button> */}
    </>
  )
}
