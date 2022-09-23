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
import CardComponent from "../components/Card";
import { useEffect, useState } from "react";

// TODO fix the slide issue

export default function DiscoverSlide(props) {
  const { productData } = props;
  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="d-block" style={{ width: "18rem" }}>
            <Image
              src={DiscoverImage}
              alt={"Discover Image"}
              height={360}
              width={400}
              layout="fixed"
            />
          </div>
        </SwiperSlide>
        {productData.products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardComponent
              Image={product.thumbnail}
              alt={`${product.brand}-${product.title}`}
              CardBrand={product.CardBrand}
              CardTitle={product.title}
              CardText={product.description}
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
