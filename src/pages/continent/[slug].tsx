import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from 'prismic-dom';
import {Cities} from "../../components/Cities";
import {Content} from "../../components/Content";
import {ContinentBanner} from "../../components/ContinentBanner";
import {Header} from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import { useRouter } from "next/dist/client/router";
import {Loading} from "../../components/Loading";

type CityProps = {
  text: string;
}

type CountryProps = {
  text: string;
}

export interface ContinentProps {
  continent: {
    slug: string;
    title: {
      text: string
    };
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      key?: Array<CityProps>;
      city: Array<CityProps>;
      country: Array<CountryProps>;
      thumbnail: string;
      flag: string;
    }[]
  }
}



export default function Continent({continent}: ContinentProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }


  return (

    <Flex direction="column">

      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continent', String(slug), {});



  const continent = {
    slug:response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    countries: RichText.asText(response.data.countries),
    languages: RichText.asText(response.data.languages),
    cities: RichText.asText(response.data.cities),
    cities_list: response.data.cities,
    cities100: response.data.cities100.map((city) => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag:city.flag.url,
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}
