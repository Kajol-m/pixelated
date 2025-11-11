import api from "@/lib/api";
import { clearWishlist } from "@/store/features/wishlistSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const TabMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch=useDispatch()
  
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

  const links = [
    { name: "OVERVIEW", link: "/dashboard" },
    { name: "PROFILE", link: "/profile" },
    { name: "ORDERS", link: "/orders" },
    { name: "WISHLIST", link: "/wishlist" },
    { name: "ADDRESSES", link: "/address" },
    { name: "TERMS & USE", link: "/terms" },
    { name: "PRIVACY POLICY", link: "/privacypolicy" },
  ];

  return (
    <div className="flex flex-col gap-3 p-8 border-r border-gray-300 h-full">
      {links.map((item) => {
        const isActive = location.pathname.startsWith(item.link);
        

        return (
          <div
            key={item.name}
            onClick={() => navigate(item.link)}
            className={`
              cursor-pointer 
              px-3 py-2 
              text-sm transition-all duration-200
              ${isActive ? "font-semibold bg-gray-100" : "hover:bg-gray-100"}
            `}
          >
            {item.name}
          </div>
        );
      })}

      <div
        onClick={handleLogout}
        className="cursor-pointer px-3 py-2 mt-4 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
      >
        LOGOUT
      </div>
    </div>
  );
};

export default TabMenu;
