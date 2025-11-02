// import { useNavigate } from "react-router-dom";

// const TabMenu = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     const user = JSON.parse(localStorage.getItem("User") || "{}");
//     const userId = user.user_id;
//     localStorage.removeItem("User");
//     localStorage.removeItem("token");
//     localStorage.removeItem("isLogin");
//     localStorage.removeItem(`wishlist_${userId}`);
//     navigate("/");
//   };

//   const links = [
//     { name: "overview", link: "/dashboard" },
//     { name: "profile", link: "/profile" },
//     {name:"orders", link:"/orders"},
//     {name:"wishlist", link:"/wishlist"},
//     {name:"address", link:"/address"},
//     {name:"terms", link:"/terms&use"},
//     {name:"privacypolicy", link:"/privacypolicy"},
//   ];

//   return (
//     <div className="flex flex-col gap-2 p-8">
//       <div className="hover:cursor-pointer">OVERVIEW</div>
//       <div className="hover:cursor-pointer">PROFILE</div>
//       <div className="hover:cursor-pointer">ORDERS</div>
//       <div className="hover:cursor-pointer">WISHLIST</div>
//       <div className="hover:cursor-pointer">ADDRESS</div>
//       <div className="hover:cursor-pointer">TERMS & USE</div>
//       <div className="hover:cursor-pointer">PRIVACY POLICY</div>
//       <div onClick={handleLogout} className="hover:cursor-pointer">
//         LOGOUT
//       </div>
//     </div>
//   );
// };
// export default TabMenu;
import { useNavigate, useLocation } from "react-router-dom";

const TabMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    localStorage.removeItem(`wishlist_${userId}`);
    navigate("/");
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
        const isActive = location.pathname === item.link;

        return (
          <div
            key={item.name}
            onClick={() => navigate(item.link)}
            className={`
              cursor-pointer 
              px-3 py-2 
              text-sm transition-all duration-200
              ${isActive ? "font-bold bg-gray-100 font-semibold" : "hover:bg-gray-100"}
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
