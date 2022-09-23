// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";

// importing the image of discover
import DiscoverImage from "../public/assets/images/1.jpg";
// importing Card component from Card.js
import DiscoverCard from "./Discover-Card";

// TODO fix the slide issue

export default function DiscoverSlide(props) {
  const { productData } = props;
  return (
    <>
      <Swiper
        slidesPerView={2}
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productData.products.map((product) => (
          <SwiperSlide key={product.id}>
            <DiscoverCard
              Image={product.thumbnail}
              alt={`${product.brand}-${product.title}`}
              CardBrand={product.brand}
              CardTitle={product.title}
              CardText={product.description}
              stars={true}
              starsNumber={product.rating}
              CardButtonText={"Go to product."}
              Price={product.price}
              Category={product.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
