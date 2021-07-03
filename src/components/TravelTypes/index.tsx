import { Flex, Box} from "@chakra-ui/react"
import {Type} from './Type'


export const TravelTypes = () => {
  return (
    <>
    <Flex
     w="100%"
     maxWidth={1480}
     flexWrap="wrap"
     justify="center"
    >
      <Type icon="cocktail" text="vida noturna" />
      <Type icon="surf" text="praia" />
      <Type icon="building" text="moderno" />
      <Type icon="museum" text="clássico" />
      <Type icon="earth" text="e mais..." />
  </Flex>
     <Box w={["60px","90px"]} mx="auto" h="2px" bg="gray.700" my={["9","20"]} />
  </>
  )
}
