import Button from "../../components/Button/Button";

const CheckoutCart:React.FC=()=>{
    return(
        <div className="relative">
        <h1 className="pb-2">Order Summary</h1>
        <div className=" flex flex-col border border-gray-500 text-sm gap-2 p-4">
           <div className="flex flex-row">
            <p>Subtotal</p>
            <p className="absolute right-8">Rs 40,000</p>
           </div>
           <div className="flex flex-row">
            <p>Shipping</p>
            <p className="absolute right-8">Rs 50</p>
           </div>
           <div className="flex flex-row">
            <p>Extimated Tax</p>
            <p className="absolute right-8">Rs 118</p>
           </div>
           <div className="flex flex-row font-semibold text-xl">
            <p>Total</p>
            <p className="absolute right-8">Rs 40,168</p>
           </div>
           <div className="w-full pt-8">
            <Button variant="signup-signin" onClick={()=>{}} className="w-full">Proceed to Checkout</Button>
           </div>
           <hr className="border-gray-300 mt-4" />
           <div>
            <p>PROMO CODE</p>
           </div>
        </div>
        </div>
    )
}
export default CheckoutCart;