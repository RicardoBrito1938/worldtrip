import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

type SliderItemProps = {
  continent : {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }
}

export const SliderItem = ({ continent }: SliderItemProps) => {

  return (
    <Flex
    w="70%"
    h="100%"
    align="center"
    margin="0 auto"
    justify="center"
    direction="column"
    bgImage={`url('${continent.image}')`}
    bgPosition="100% 30%"
    bgRepeat="no-repeat"
    bgSize="cover"
    textAlign="center"
  >
    <Link href={`/continent/${continent.slug}`}>
      <a>
        <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">{continent.title}</Heading>
        <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{continent.summary}</Text>
      </a>
    </Link>
  </Flex>
  )
}
