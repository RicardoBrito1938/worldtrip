import { Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from '../SliderItem';


SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export const Slider = ({continents}: SliderProps) =>  {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide={0}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
              <SliderItem continent={continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
