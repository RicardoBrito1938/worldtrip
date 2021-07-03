import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  text: string;
}

export const Type = ({icon, text}:TypeProps )  => {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })

  return (
      <Flex direction={["row","column"]} align="center" justify="center" margin={["1","10"]}>
        {isMobile ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
        <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
      </Flex>
  )
}
