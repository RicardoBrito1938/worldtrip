import Prismic from '@prismicio/client';
import { getPrismicClient } from "../services/prismic";
import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Slider } from "../components/Slider";



interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}


export default function Home({ continents }: HomeProps)  {
  return (
    <Flex direction="column">
     <Header />
     <Banner />
     <TravelTypes />

     <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5","14"]}
      fontSize={["lg",
      "3xl",
      "4xl"]}
    >
    Vamos nessa?<br/>Então escolha seu continente
    </Heading>

    <Slider continents={continents} />
    </Flex>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      summary: continent.data.summary[0].text,
      image: continent.data.image.url
    }
  })



  return {
    props: {
      continents
    }
  }
}
