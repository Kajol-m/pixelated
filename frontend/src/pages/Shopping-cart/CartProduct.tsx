const CartProduct: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8 pt-8 mr-8 ml-8 border-b border-gray-300 relative ">
        <div className="w-[150px]">
          <img src="/Pink-bow-top.webp" alt="" />
        </div>
        <div className="flex flex-col gap-2 pl-8 ">
          <div className="flex flex-row text-xl font-semibold">
            <p className="">Paranoia Graphic Baggy Jeans</p>
            <p className="absolute right-8">Rs. 10,700.00</p>
          </div>
          <div className="">
            <p>Size : XS</p>
            <p>Color : Pink</p>
            <p>Quantity : 2</p>
            {/*Increment-Decrement*/}
          </div>
          <div className="flex flex-row gap-8 text-gray-500 pt-[50px] text-[13px]">
            <p className="">14 days return available</p>
            <div className="absolute flex right-8 gap-2 underline underline-offset-4">
              <button>Remove</button>
              <button>Save for later</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartProduct;
