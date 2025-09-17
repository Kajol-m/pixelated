import Button from "../Button/Button";

const SubscribeEmail: React.FC = () => {
  return (
    <div className=" border-t-1 border-b-1 border-gray-300">
    <div className="flex py-[50px]">
      <div className="w-1/2 pl-[150px] ml-2 pr-[150px]">
        <h1 className="font-bold pb-2">Sign-up for Email</h1>
        <p className="text-xs">
          Sign up to receive Pixelated emails and get first dibs on new
          arrivals, sales, exclusive content, events and more!
        </p>
      </div>
      <div className="w-1/2 pr-[150px]">
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
            className="pl-[50px] pr-[50px]"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
    <p className="text-xs  pl-[150px] ml-2 pb-8">
        By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our <span className="underline underline-offset-2">Privacy Policy here</span> and you may <span className="underline underline-offset-2">unsubscribe</span> at any time
    </p>
    </div>
  );
};
export default SubscribeEmail;
