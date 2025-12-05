import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect } from "react";

const UserDropdown: React.FC = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
    }
  }, [isLogin, navigate]);

  if (isLogin) {
    return null;
  }

  return (
    <div className="cursor-pointer" onClick={() => navigate(`/login`)}>
      <Button variant="user-dropdown">Login</Button>
    </div>
  );
};
export default UserDropdown;
