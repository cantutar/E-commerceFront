import Image from "next/image";

import React, { FC } from "react";

interface Props {
  classes: string;
}

const CardItem: FC<Props> = ({ classes }) => {
  return (
    <>
      <div
        className={`bg-midnight h-auto w-auto rounded flex flex-col justify-between items-center p-4 ${classes}`}
      >
        <h1 className="text-2xl mt-2">Apple</h1>
        <h6 className="text-xl">
          MSI MPG Z590 GAMING FORCE LGA 1200 Intel Z590 SATA 6Gb/s ATX Intel
          Motherboard
        </h6>
        <div className="">
          <Image
            src="https://c1.neweggimages.com/ProductImageCompressAll300/13-144-386-05.jpg"
            alt="ürün resmi"
            width={240}
            height={240}
          />
        </div>
        <span>$109.99</span>
      </div>
    </>
  );
};

export default CardItem;
