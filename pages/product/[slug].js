import React from "react";

import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/*left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/*left column end */}
          {/*Right column start */}
          <div className="flex-[1] py-3">
            {/*Product Title */}

            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/*Product SubTitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/*Product Price */}
            <div className="text-lg font-semibold">MRP:₹ 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of texes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/*PRODUCT SIZE START RANGE*/}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/*Size Start */}

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                  UK 10
                </div>
              </div>
              {/*Size End */}
              {/*Show Error Start */}

              <div className="text-red-600 mt-1">Size Selecton is Required</div>

              {/*Show Error End */}
            </div>
            {/*PRODUCT SIZE  RANGE END*/}
            {/*ADD TO CART BUTTON START*/}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medim transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>

            {/*ADD TO CART BUTTON END*/}
            {/*WISHLIST BUTTON START*/}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
            </button>
            {/*WISHLIST BUTTON END*/}
            {/*Product details*/}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, fuga maxime eos laboriosam eaque ut suscipit,
                inventore quod magni, temporibus quasi sunt pariatur iusto
                commodi quam excepturi officiis nobis non. Distinctio, id veniam
                dolores labore nobis dignissimos laboriosam tempore asperiores
                reprehenderit repellat rerum, debitis sunt quaerat ut nihil
                perspiciatis voluptatem.
              </div>
            </div>
            {/*Product Details*/}
          </div>
          {/*Right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
