import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const UserDropdown: React.FC = () => {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin");

  const handleLogout = () => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    localStorage.removeItem(`wishlist_${userId}`);
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="cursor-pointer">
      {isLogin ? (
        <div className="flex flex-col">
          <Button variant="user-dropdown" onClick={handleProfile}>
            PROFILE
          </Button>
          <Button variant="user-dropdown" onClick={handleLogout}>
            LOGOUT
          </Button>
        </div>
      ) : (
        <Button variant="user-dropdown" onClick={handleLogin}>
          Login
        </Button>
      )}
    </div>
  );
};
export default UserDropdown;
