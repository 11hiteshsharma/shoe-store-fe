import React from "react";
import Wrapper from "@/components/Wrapper";
import CartItems from "@/components/CartItems";
const Cart = () => {
  return (
    <div>
      <Wrapper>
        {/*Heading and paragraph Start */}

        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/*Heading and paragraph end */}

        {/*Cart Content Start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/*Cart Items Start */}

          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
          </div>
          {/*Cart Items end */}
          {/*Summary Start */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
          </div>
          {/*Summary end */}
        </div>

        {/*Cart Content End */}
      </Wrapper>
    </div>
  );
};

export default Cart;
