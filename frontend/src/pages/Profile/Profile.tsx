import Header from "@/common/Header/Header";
import ProfileImageSection from "./ProfileImageSection";
import ProfileInformationSection from "./ProfileInformationSection";
import { useNavigate } from "react-router-dom";
import Button from "@/common/Button/Button";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    localStorage.removeItem(`wishlist_${userId}`);
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="pt-[85px]"></div>
      <div>
        <ProfileImageSection />
        <ProfileInformationSection />
      </div>
      <div>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};
export default Profile;
