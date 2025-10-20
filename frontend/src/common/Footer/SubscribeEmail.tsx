// import Button from "../Button/Button";

// const SubscribeEmail: React.FC = () => {
//   return (
//     <div className=" border-t-1 border-b-1 border-gray-300">
//     <div className="flex lg:flex-row flex-col lg:pt-[50px] md:pt-[50px] pt-[10px] lg:pb-8 md:pb-8 pb-4">
//       <div className="lg:w-1/2 lg:px-[150px] md:pl-[80px] pl-[10px] ml-2">
//         <h1 className="font-bold pb-2">Sign-up for Email</h1>
//         <p className="text-xs">
//           Sign up to receive Pixelated emails and get first dibs on new
//           arrivals, sales, exclusive content, events and more!
//         </p>
//       </div>
//       <div className="md:w-1/2 pr-[150px] lg:pl-[152px] md:pl-[90px] pl-[20px] pt-2">
//         <label htmlFor="subcribe text-sm">Email Address</label>
//         <div className="flex gap-4">
//           <input
//             type="text"
//             name="email"
//             onChange={() => {}}
//             id="email"
//             className="border-1 border-black rounded-none lg:px-3 lg:py-2 lg:w-[500px]"
//           />
//           <Button
//             variant="secondary"
//             onClick={() => {}}
//             className="lg:pl-[50px] lg:pr-[50px] md:px-[50px] px-[40px]"
//           >
//             SUBMIT
//           </Button>
//         </div>
//       </div>
//     </div>
//     <p className="text-justify text-xs  lg:pl-[150px] md:px-[80px] px-[10px] ml-2 pb-8">
//         By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our <span className="underline underline-offset-2">Privacy Policy here</span> and you may <span className="underline underline-offset-2">unsubscribe</span> at any time
//     </p>
//     </div>
//   );
// };
// export default SubscribeEmail;
import Button from "../Button/Button";

const SubscribeEmail: React.FC = () => {
  return (
    <div className="border-t border-b border-gray-300">
      <div className="flex flex-col lg:flex-row lg:pt-[50px] md:pt-[50px] pt-[10px] lg:pb-8 md:pb-8 pb-4">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:px-[150px] md:pl-[80px] pl-[20px] pr-[20px]">
          <h1 className="font-bold pb-2 text-lg md:text-xl">Sign-up for Email</h1>
          <p className="text-xs md:text-sm">
            Sign up to receive Pixelated emails and get first dibs on new
            arrivals, sales, exclusive content, events and more!
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-[152px] md:pl-[90px] pl-[20px] pr-[20px] pt-4 md:pt-2">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <input
              type="email"
              name="email"
              id="email"
              onChange={() => {}}
              placeholder="Enter your email"
              className="border border-black rounded-none px-3 py-2 w-full sm:flex-1"
            />
            <Button
              variant="secondary"
              onClick={() => {}}
              className="px-6 py-2 w-full sm:w-auto"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-justify text-xs lg:pl-[150px] md:px-[80px] px-[20px] pb-8">
        By entering your email address, you agree to receive Pixelated offers,
        promotions, and other commercial messages. You can view our{" "}
        <span className="underline underline-offset-2 cursor-pointer">
          Privacy Policy here
        </span>{" "}
        and you may{" "}
        <span className="underline underline-offset-2 cursor-pointer">
          unsubscribe
        </span>{" "}
        at any time.
      </p>
    </div>
  );
};

export default SubscribeEmail;
