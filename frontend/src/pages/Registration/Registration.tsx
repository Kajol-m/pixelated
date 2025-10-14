import { useState } from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface RegistrationProps {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationProps>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange =
    (fieldName: keyof RegistrationProps) => (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));

      setErrors(validateForm({ ...formData, [fieldName]: value }));
    };

  const [visitedFields, setVisitedFields] = useState<Set<string>>(new Set());

  const validateForm = (
    vals: RegistrationProps,
    validateAll: boolean = false
  ): Errors => {
    const errs: Errors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validateAll || visitedFields.has("fullName")) {
      if (!vals.fullName.trim()) errs.fullName = "Name is required";
      else if (!nameRegex.test(vals.fullName.trim()))
        errs.fullName = "Only Latin letters are allowed";
    }

    if (validateAll || visitedFields.has("email")) {
      if (!vals.email.trim()) errs.email = "Email is required";
      else if (/\s/.test(vals.email))
        errs.email = "Blank spaces are not allowed";
      else if (!emailRegex.test(vals.email))
        errs.email = "Invalid email format";
    }

    if (validateAll || visitedFields.has("password")) {
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

    if (validateAll || visitedFields.has("confirmPassword")) {
      if (!vals.confirmPassword)
        errs.confirmPassword = "Password confirmation is required";
      else if (vals.confirmPassword !== vals.password)
        errs.confirmPassword = "Passwords must match";
    }

    // Add more validation logic as needed
    return errs;
  };

  const handleFocus = (fieldName: keyof RegistrationProps) => () => {
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
  const handleBlur = (fieldName: keyof RegistrationProps) => () => {
    setVisitedFields(prev => new Set(prev).add(fieldName as string));
    setErrors(validateForm(formData));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const newErrors = validateForm(formData, true);
  //   setErrors(newErrors);

  //   const isValid = Object.values(newErrors).every((error) => error === "");

  //   if (isValid) {
  //     const newUser = {
  //       fullName: formData.fullName,
  //       email: formData.email,
  //       password: formData.password,
  //     };
  //     console.log(newUser);
  //     localStorage.setItem("User", JSON.stringify(newUser));
  //     navigate("/login");
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors = validateForm(formData, true);
  setErrors(newErrors);

  const isValid = Object.values(newErrors).every((error) => error === "");

  if (!isValid) return;

  try {
    const response = await axios.post("https://pixelated-node-2.onrender.com/api/users/register", {
      user_name: formData.fullName,   // backend expects user_name
      email: formData.email,
      password: formData.password,
    });

    console.log("✅ Registered:", response.data);

    // You probably don’t want to save password in localStorage!
    // Instead save token or just navigate
    localStorage.setItem("User", JSON.stringify(response.data.user));

    navigate("/login");

  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      console.error("❌ API Error:", err.response.data);
      alert(err.response.data.message || "Registration failed");
    } else if (err instanceof Error) {
      console.error("❌ Network Error:", err.message);
      alert("Server not reachable");
    } else {
      console.error("❌ Unknown Error:", err);
      alert("An unexpected error occurred");
    }
  }
};

  //moves key from one input field to another on Pressing Enter
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
    <div className="flex h-[100vh] items-center justify-center bg-gray-300">
      <div className=" relative w-full max-w-md p-[50px] bg-white m-8 shadow-lg">
        <button
          onClick={() => navigate("/")}
          className="absolute right-[25px] top-[25px] pb-5"
        >
          <RxCross2 size={24} />
        </button>
        <h1 className="text-4xl font-bold text-center pb-5">
          Create an account
        </h1>
        {/* <p className="text-xs text-center text-gray-500 pb-5">
          Sign up so you can save items to your wishlists, track your orders and
          check out faster!
        </p> */}
        <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
          <div className="form h-full pb-3">
            <div className="">
              <Input
                labelText="Name"
                placeholderText="Enter full name"
                onChange={handleChange("fullName")}
                type="text"
                value={formData.fullName}
                inputId="fullName"
                name="fullName"
                onFocus={handleFocus("fullName")}
                onBlur={handleBlur("fullName")}
                required={true}
                className=""
                errors={errors.fullName}
                supportiveText={errors.fullName ? undefined : ""}
              />
            </div>
            <div className="">
              {" "}
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
              <Input
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
              />
            </div>
            <div className="">
              <Input
                labelText="Confirm Password"
                placeholderText="confirm password"
                onChange={handleChange("confirmPassword")}
                type="password"
                value={formData.confirmPassword}
                inputId="confirmPassword"
                name="confirmPassword"
                onFocus={handleFocus("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                required={true}
                errors={errors.confirmPassword}
                supportiveText={errors.confirmPassword ? undefined : ""}
              />
            </div>
          </div>
          <div className="Sign-up">
            <Button
              variant="signup-signin"
              type="submit"
              className="pl-[50px] pr-[50px] w-full"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-center pt-5">
          <h1 className="pb-5">Already hava an account ?</h1>
          <Link to="/login">
            <Button
              variant="primary"
              onClick={() => console.log("redirects to log in")}
              className="pl-[50px] pr-[50px]"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Registration;
