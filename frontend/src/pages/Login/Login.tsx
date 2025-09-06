import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (vals: LoginProps): Errors => {
    const errs: Errors = {
      email: "",
      password: "",
    };

    if (!vals.email.trim()) {
      errs.email = "Full name is required";
    }

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Add more validation logic as needed

    return errs;
  };
  const [loading, setLoading] = useState(false);

  // const validate=():boolean=>{

  // }

  return (
    <div className="flex items-center justify center h-screen items-center justify-center h-screen bg-gray-300">
      <div className=" relative w-full max-w-md p-[50px] bg-white m-8 shadow-lg">
        {/* <div className="absolute right-[25px] top-[25px] pb-5"><RxCross2 /></div> */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-[25px] top-[25px] pb-5"
        >
          <RxCross2 size={24} />
        </button>
        <h1 className="text-4xl font-bold text-center pb-5">Sign in</h1>
        <p className="text-xs text-center text-gray-500 pb-5">
          Sign in so you can save items to your wishlists, track your orders and
          check out faster!
        </p>

        <div className="form h-full pb-3">
          <div className="pb-3">
            <Input
              labelText="Email"
              placeholderText="Enter email-id"
              onChange={(value: string) => handleChange(value, "email")}
              type="text"
              value={formData.email}
              inputId="email"
              name="email"
              required={true}
            />
          </div>
          <div className="pb-3">
            <Input
              labelText="Password"
              placeholderText="password"
              onChange={(value: string) => handleChange(value, "password")}
              type="password"
              value={formData.password}
              inputId="password"
              name="password"
              required={true}
            />
          </div>
        </div>
        <div className="">
          <Button
            variant="signup-signin"
            onClick={() => console.log("Login")}
            className="pl-[50px] pr-[50px] w-full"
          >
            Sign In
          </Button>
        </div>
        <div className="text-center pt-5">
          <h1 className="pb-5">Don't hava an account ?</h1>
          <Link to="/registration">
            <Button
              variant="primary"
              onClick={() => console.log("Sign-up")}
              className="pl-[50px] pr-[50px] w-full"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
