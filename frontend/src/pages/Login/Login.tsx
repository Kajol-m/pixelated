import { useState } from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PasswordInput from "@/common/Input/PasswordInput";
import api from "@/lib/api";
import { toast } from "sonner";
import ButtonSpinner from "@/common/Spinner/ButtonSpinner";
import { useDispatch } from "react-redux";
import { setWishlist } from "@/store/features/wishlistSlice";
import type { Product, ProductApi } from "../Wishlist/Wishlist";

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
  const dispatch = useDispatch();

  const [visitedFields, setVisitedFields] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateLogin = (vals: LoginProps): Errors => {
    const errs: Errors = {
      email: "",
      password: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (visitedFields.has("email")) {
      if (!vals.email.trim()) errs.email = "Email is required";
      else if (/\s/.test(vals.email))
        errs.email = "Blank spaces are not allowed";
      else if (!emailRegex.test(vals.email))
        errs.email = "Invalid email format";
    }

    if (visitedFields.has("password")) {
      if (!vals.password) errs.password = "Password is required";
      else if (vals.password.length < 8)
        errs.password = "Password must be at least 8 characters long";
      else {
        const missing = [];
        if (!/[A-Z]/.test(vals.password)) missing.push("one uppercase letter");
        if (!/[a-z]/.test(vals.password)) missing.push("one lowercase letter");
        if (!/\d/.test(vals.password)) missing.push("one digit");
        if (!/[@$!%*?&]/.test(vals.password))
          missing.push("one special character");

        if (missing.length > 0) {
          errs.password = `Password must contain ${missing.join(", ")}`;
        }
      }
    }
    return errs;
  };

  const handleChange = (fieldName: keyof LoginProps) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors(validateLogin({ ...formData, [fieldName]: value }));
  };

  const handleFocus = (fieldName: keyof LoginProps) => () => {
    setVisitedFields((prev) => {
      const updated = new Set(prev);
      updated.add(fieldName as string);
      return updated;
    });
    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  };

  const handleBlur = (fieldName: keyof LoginProps) => () => {
    setVisitedFields((prev) => new Set(prev).add(fieldName as string));
    setErrors(validateLogin(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.post(`/api/users/login`, {
        email: formData.email,
        password: formData.password,
      });

      console.log("✅ Logged in:", response.data);
      toast.success("Login Successful!", {
        description: "Happy Shopping",
      });

      const accessToken = response.data.accessToken;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("isLogin", "true");

      try {
        const wishlistResponse = await api.get(
          `/api/users/wishlistProducts/${response.data.user.user_id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        
        const res = await wishlistResponse.data;
        const data: ProductApi[] = res.wishlist || [];
        const transformed: Product[] = data.map((p) => {
          const primary =
            p.images.find((img) => img.display_order === 1)?.url || "";
          const hover =
            p.images.find((img) => img.display_order === 2)?.url || "";

          return {
            id: p.product_id,
            name: p.product_name,
            price: p.price,
            image: primary,
            hover_image: hover,
            user_id: response.data.user.user_id,
          };
        });
        dispatch(setWishlist(transformed));
      } catch (err) {
        console.error("Failed to fetch wishlist after login", err);
      }

      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const code = err.response?.data?.code;
        switch (code) {
          case "USER_NOT_REGISTERED":
            toast.error("User not registered. Please sign up!");
            break;
          case "INVALID_CREDENTIALS":
            toast.error("Invalid password. Try again!");
            break;
          default:
            toast.error(err.response?.data?.message || "Login failed");
        }
      }
    } finally {
      setIsSubmitting(false); // always stop spinner
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const formElements = Array.from(
        e.currentTarget.elements
      ) as HTMLElement[];
      const inputs = formElements.filter((el) =>
        ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)
      );
      const index = inputs.findIndex((el) => el === document.activeElement);
      if (index !== -1) {
        const next = inputs[index + 1];
        if (next && "focus" in next) (next as HTMLElement).focus();
        else handleSubmit(e as React.FormEvent);
      }
    }
  };

  return (
    <div className="flex items-center justify center h-screen items-center justify-center h-screen bg-gray-300 ">
      <div className=" relative w-full max-w-md lg:p-[50px] md:p-[50px] p-[20px] bg-white m-8 shadow-lg cursor-pointer">
        <button
          onClick={() => navigate("/")}
          className="absolute right-[25px] top-[25px] pb-5 cursor-pointer"
        >
          <RxCross2 size={24} />
        </button>
        <h1 className="text-4xl font-bold text-center pb-5">Sign in</h1>
        <p className="text-xs text-center text-gray-500 pb-5">
          Sign in so you can save items to your wishlists, track your orders and
          check out faster!
        </p>
        <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
          <div className="form h-full pb-3">
            <div className="">
              <Input
                labelText="Email"
                placeholderText="Enter email-id"
                onChange={handleChange("email")}
                type="text"
                value={formData.email}
                inputId="email"
                name="email"
                onFocus={handleFocus("email")}
                onBlur={handleBlur("email")}
                required={true}
                errors={errors.email}
                supportiveText={errors.email ? undefined : ""}
              />
            </div>
            <div className="">
              <PasswordInput
                labelText="Password"
                placeholderText="password"
                onChange={handleChange("password")}
                type="password"
                value={formData.password}
                inputId="password"
                name="password"
                onFocus={handleFocus("password")}
                onBlur={handleBlur("password")}
                required={true}
                errors={errors.password}
                supportiveText={errors.password ? undefined : ""}
                showPassword={true}
              />
            </div>
          </div>
          <div className="">
            <Button
              variant="signup-signin"
              className="pl-[50px] pr-[50px] w-full  cursor-pointer"
            >
              {isSubmitting ? <ButtonSpinner className="w-4 h-4" /> : "Sign In"}
            </Button>
          </div>
        </form>
        <div className="text-center pt-5">
          <h1 className="pb-5">Don't hava an account ?</h1>
          <Link to="/registration">
            <Button
              variant="primary"
              onClick={() => {}}
              className="pl-[50px] pr-[50px]  cursor-pointer"
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
