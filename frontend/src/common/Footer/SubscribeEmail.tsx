import Button from "../Button/Button";

const SubscribeEmail: React.FC = () => {
  return (
    <div className=" border-t-1 border-b-1 border-gray-300">
    <div className="flex lg:flex-row flex-col pt-[50px] pb-8">
      <div className="lg:w-1/2 lg:px-[150px] md:pl-[100px] pl-[10px] ml-2">
        <h1 className="font-bold pb-2">Sign-up for Email</h1>
        <p className="text-xs">
          Sign up to receive Pixelated emails and get first dibs on new
          arrivals, sales, exclusive content, events and more!
        </p>
      </div>
      <div className="md:w-1/2 pr-[150px] lg:pl-[152px] md:pl-[110px] pl-[20px] pt-2">
        <label htmlFor="subcribe text-sm">Email Address</label>
        <div className="flex gap-4">
          <input
            type="text"
            name="email"
            onChange={() => {}}
            id="email"
            className="border-1 border-black rounded-none px-3 py-2 w-[500px]"
          />
          <Button
            variant="secondary"
            onClick={() => {}}
            className="lg:pl-[50px] lg:pr-[50px] md:px-[50px] px-[40px]"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
    <p className="text-justify text-xs  lg:pl-[150px] md:px-[100px] px-[10px] ml-2 pb-8">
        By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our <span className="underline underline-offset-2">Privacy Policy here</span> and you may <span className="underline underline-offset-2">unsubscribe</span> at any time
    </p>
    </div>
  );
};
export default SubscribeEmail;
