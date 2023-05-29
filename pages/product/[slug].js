import React from "react";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelecetdSize] = useState();
  const [showError, setShowError] = useState(false);
  const p = product?.data[0]?.attributes;

  const calculateDiscountPercentage = (p) => {
    if (p?.orignal_price && p?.price) {
      const percentage =
        ((p?.orignal_price - p.price) / p?.orignal_price) * 100;
      return Math.round(percentage);
    }
    return 0;
  };

  const discountPercentage = calculateDiscountPercentage(p);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Success, Check your Cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/*left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          {/*left column end */}
          {/*Right column start */}
          <div className="flex-[1] py-3">
            {/*Product Title */}

            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p?.name}
            </div>
            {/*Product SubTitle */}
            <div className="text-lg font-semibold mb-5">{p?.subtitle}</div>

            {/*Product Price */}
            <div className="flex items-center">
              <p className=" mr-2 text-lg font-semibold">
                MRP : &#8377;{p?.price}
              </p>
              {p.orignal_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{p.orignal_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {discountPercentage}% off
                  </p>
                </>
              )}
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

              <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                {p?.size?.data?.map((item, i) => (
                  <div
                    className={`border rounded-md text-center py-3 font-medium ${
                      item?.enabled
                        ? "hover:border-black cursor-pointer"
                        : "bg-black/[0.1] opacity-50 cursor-not-allowed"
                    } ${selectedSize === item?.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelecetdSize(item?.size);
                      setShowError(false);
                    }}
                  >
                    {item?.size}
                  </div>
                ))}
              </div>
              {/*Size End */}
              {/*Show Error Start */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size Selecton is Required
                </div>
              )}

              {/*Show Error End */}
            </div>
            {/*PRODUCT SIZE  RANGE END*/}

            {/*ADD TO CART BUTTON START*/}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medim transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizeGrid").scrollIntoView({
                    block: "center",
                    behaviour: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data[0],
                      selectedSize,
                      oneQuantityPrice: p?.price,
                    })
                  );
                }
                notify();
              }}
            >
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
                <ReactMarkdown>{p?.description}</ReactMarkdown>
              </div>
            </div>
            {/*Product Details*/}
          </div>
          {/*Right column end */}
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p?.attributes?.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

// getstaticpaths requires using getstaticprops

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: { product, products },
  };
}
