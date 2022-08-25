import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SushiBoat from "../../public/images/sushi-boat.jpeg";
import SushiDish from "../../public/images/sushi-dish.jpeg";
import SushiPlate from "../../public/images/sushi-plate.jpeg";
import SushiShip from "../../public/images/sushi-ship.jpeg";
import Sushi from "../../public/images/sushi.jpeg";
import Image from "next/image";
import { Navigation } from "swiper";
import { globalCss } from "@stitches/react";
import { useEffect, useState } from "react";

const images = [
  {
    image: SushiShip,
    alt: "sushi ship dish",
  },
  {
    image: SushiBoat,
    alt: "sushi boat dish",
  },
  {
    image: SushiDish,
    alt: "sushi dish",
  },
  {
    image: SushiPlate,
    alt: "sushi plate",
  },

  {
    image: Sushi,
    alt: "sushi",
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
        slidesPerView={desktop ? 2 : 1}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={1200}
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
    color: "#e72e4a !important",
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
