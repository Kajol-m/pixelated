import { NavLink, useLocation } from "react-router-dom";

const OrderProcess = () => {
  const location = useLocation();

  const steps = [
    { name: "CART", path: "/shopping-cart" },
    { name: "ADDRESS", path: "/select-address" },
    { name: "PAYMENT", path: "/payment" },
  ];

  const isActiveStep = (path: string) => location.pathname === path;

  return (
    <div className="border-b border-gray-200 shadow-sm px-4 md:py-6 py-4">

      {/* TOP BAR (Logo + Desktop Steps) */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="hidden lg:flex">
          <h1 className="text-2xl md:text-3xl font-bold">PIXELATED</h1>
        </NavLink>

        {/* Desktop Steps */}
        <div className="hidden lg:flex flex-row items-center gap-4 text-gray-600">
          {steps.map((step, index) => (
            <div key={step.name} className="flex items-center gap-2">
              <NavLink
                to={step.path}
                className={`${
                  isActiveStep(step.path)
                    ? "text-black font-semibold underline underline-offset-4"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </NavLink>
              {index < steps.length - 1 && (
                <span className="text-gray-400">—</span>
              )}
            </div>
          ))}
        </div>

        {/* Desktop spacer */}
        <div className="hidden lg:block w-[200px]"></div>
      </div>

      {/* 🚀 MOBILE + TABLET STEPS (SEPARATE ROW, ALWAYS CENTERED) */}
      <div className="flex lg:hidden justify-center w-full mt-2 text-sm text-gray-700 gap-2">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center gap-1">
            <span
              className={`${
                isActiveStep(step.path)
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <span className="text-gray-400">—</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default OrderProcess;
