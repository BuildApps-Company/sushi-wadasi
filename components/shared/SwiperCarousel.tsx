import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SushiBoat from "../../public/images/sushi-boat.jpeg";
import SushiDish from "../../public/images/sushi-dish.jpeg";
import SushiPlate from "../../public/images/sushi-plate.jpeg";
import SushiShip from "../../public/images/sushi-ship.jpeg";
import SushiChef from "../../public/images/chef.jpeg";
import Avocado from "../../public/images/avocado.jpeg";
import FlagBoat from "../../public/images/flag-boat.jpeg";
import VerticalBoat from "../../public/images/vertical-boat.jpeg";
import Sushi from "../../public/images/sushi.jpeg";
import Image from "next/image";
import { Navigation } from "swiper";
import { globalCss } from "@stitches/react";
import { useEffect, useState } from "react";

const images = [
  {
    image: Sushi,
    alt: "sushi",
  },
  {
    image: Avocado,
    alt: "avocado dish",
  },
  {
    image: SushiChef,
    alt: "Dish from chef",
  },
  {
    image: FlagBoat,
    alt: "Boat sushi dish",
  },
  {
    image: VerticalBoat,
    alt: "boat dish",
  },
  {
    image: SushiPlate,
    alt: "sushi plate",
  },
];

export const SwiperCarousel = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    window && setDesktop(window.innerWidth >= 1200);
  }, []);

  return (
    <>
      {style()}
      <Swiper
        spaceBetween={5}
        loop={true}
        slidesPerView={desktop ? 3 : 2}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={700}
              height={desktop ? 900 : 800}
              objectFit={"cover"}
              src={item.image}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const style = globalCss({
  "div.swiper": {
    userSelect: "none",
    zIndex: 0,
  },
  "div.swiper-button-prev::after, div.swiper-button-next::after": {
    color: "#ff0000 !important",
  },

  "div.swiper-button-prev, div.swiper-button-next": {
    borderRadius: "8px",
    backgroundColor: "rgba(226, 226, 226, 0.2)",
    height: "60px !important",
    width: "40px !important",
    "&:hover": {
      backgroundColor: "rgba(226, 226, 226, 0.4)",
    },
  },
});
