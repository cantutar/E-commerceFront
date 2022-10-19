import Image from "next/image";
import React, { FC } from "react";

interface Props {}

const Category = [
  { name: "Electronics" },
  { name: "Fashion" },
  { name: "Home" },
  { name: "Sports" },
  { name: "Toys" },
  { name: "Grocery" },
];

const Categories: FC<Props> = () => {
  return (
    <div className="bg-gray-300 w-full h-72 mt-20 px-16 py-20">
      <h1 className="text-3xl font-bold uppercase ml-9">Categories</h1>
      <div className="flex flex-row justify-evenly items-center">
        {Category.map((items) => {
          return (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full">
                  <Image
                    src="https://promotions.newegg.com/nepro/22-0820/Homepage_CategoryCircle_Software.png"
                    alt="category images"
                    width={100}
                    height={100}
                  />
                </div>
                <span>{items.name}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
