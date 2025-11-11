import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import api from "@/lib/api";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { clearWishlist } from "@/store/features/wishlistSlice";

const UserDropdown: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("isLogin");

  const handleLogout = async () => {
    try {
      await api.post("/api/users/logout");
      localStorage.removeItem("User");
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
      dispatch(clearWishlist());
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout. Please try again.");
    }
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
