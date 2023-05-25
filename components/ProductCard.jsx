import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ data: { attributes: p, id } }) => {
  const calculateDiscountPercentage = (p) => {
    if (p?.orignal_price && p?.price) {
      const percentage =
        ((p?.orignal_price - p.price) / p?.orignal_price) * 100;
      return Math.round(percentage);
    }
    return 0;
  };

  const discountPercentage = calculateDiscountPercentage(p);

  return (
    <Link
      href={`/products/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p?.thumbnail?.data?.attributes?.url}
        alt={p?.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p?.price}</p>

          {p?.orignal_price && (
            <>
              <p className="text-base font-medium line-through">
                &#8377;{p?.orignal_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {discountPercentage}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
