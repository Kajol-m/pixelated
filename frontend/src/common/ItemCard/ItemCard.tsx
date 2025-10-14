// import { useState } from "react";
// import { AiFillHeart } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
// import { Link } from "react-router";

// interface ItemCardsProps {
//   id: string;
//   imgUrl?: string;
//   imgHoverUrl?: string;
//   discountTag?: string;
//   title?: string;
//   price?: string;
//   // wishlisted?:boolean;
// }
// const ItemCard: React.FC<ItemCardsProps> = ({
//   id,
//   imgUrl,
//   imgHoverUrl,
//   discountTag,
//   title,
//   price,
//   // wishlisted:wishlistedProp=false
// }) => {
//   const [wishlisted, setWishlisted] = useState(false);

//   const toggleWishlist = async () => {
//     if (!wishlisted) {
//       await addToWishList(id);
//       setWishlisted(true);
//     } else {
//       await removeFromWishList(id);
//       setWishlisted(false);
//     }
//   };

//   const addToWishList = async (id: string) => {
//     const token = localStorage.getItem("token"); // retrieve the saved JWT
//     const user = JSON.parse(localStorage.getItem("User") || "{}");
//     const user_id = user.user_id;

//     if (!token) {
//       alert("Please log in to use the wishlist.");
//       return;
//     }
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/users/addWishlist",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ user_id, product_id: id }),
//         }
//       );
//       const data = await response.json();
//       console.log("Added to wishlist:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const removeFromWishList = async (id: string) => {
//     try {
//       const token = localStorage.getItem("token"); // retrieve the saved JWT
//       const user = JSON.parse(localStorage.getItem("User") || "{}");
//       const user_id = user.user_id;
//       if (!token) {
//         alert("Please log in to use the wishlist.");
//         return;
//       }
//       const response = await fetch(
//         "http://localhost:5000/api/users/removeWishlist",
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ user_id, product_id: id }),
//         }
//       );
//       const data = await response.json();
//       console.log("Removed from wishlist:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <div className="pl-4 pr-4 lg:py-8 md:py-8 pt-4 pb-2">
//         <div className="relative group overflow-hidden product-image-wishlist-and-addtocart">
//           <Link to={`/product/${id}`}>
//             <img
//               src={imgUrl}
//               alt={title}
//               className="w-full h-full object-cover block"
//             />
//           </Link>
//           <Link to={`/product/${id}`}>
//             <img
//               src={imgHoverUrl}
//               alt={title}
//               className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
//             />
//           </Link>

//           <div className="wishlist absolute top-5 right-7 w- z-10">
//             <button onClick={toggleWishlist}>
//               {wishlisted ? (
//                 <AiFillHeart className="text-xl" />
//               ) : (
//                 <AiOutlineHeart className="text-xl" />
//               )}
//             </button>
//           </div>
//           <div className="absolute top-0 left-0 z-10">
//             {discountTag && <span className="discount-tag">{discountTag}</span>}
//           </div>
//           <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             <button className="w-full bg-black text-white py-3 hover:bg-gray-800">
//               ADD TO CART
//             </button>
//           </div>
//         </div>
//         <div className="product-title-and-price">
//           <Link to={`/product/${id}`}>
//             <p className="pt-5 text-xs lg:text-sm md:text-sm ">{title}</p>
//           </Link>

//           <p className="pt-1 text-xs lg:text-sm md:text-sm ">{price}</p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ItemCard;
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router";
import {useWishlist} from "../../hooks/useWishlist"; // adjust path as needed
import { toast } from "sonner";

interface ItemCardsProps {
  id: string;
  imgUrl?: string;
  imgHoverUrl?: string;
  discountTag?: string;
  title?: string;
  price?: string;
}

const ItemCard: React.FC<ItemCardsProps> = ({
  id,
  imgUrl,
  imgHoverUrl,
  discountTag,
  title,
  price,
}) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleWishlist = async () => {
    await toggleWishlist(id); // this will handle backend + local updates
  };

  const wishlisted = isWishlisted(id); // get real-time state from context

  
  return (
    <div className="pl-4 pr-4 lg:py-8 md:py-8 pt-4 pb-2">
      <div className="relative group overflow-hidden product-image-wishlist-and-addtocart">
        <Link to={`/product/${id}`}>
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover block"
          />
        </Link>
        <Link to={`/product/${id}`}>
          <img
            src={imgHoverUrl}
            alt={title}
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
          />
        </Link>

        {/* ❤️ Wishlist Button */}
        <div className="wishlist absolute top-5 right-7 z-10">
          <button onClick={handleWishlist}>
            {wishlisted ? (
              <AiFillHeart className="text-xl" />
            ) : (
              <AiOutlineHeart className="text-xl" />
            )}
          </button>
        </div>

        {/* Discount */}
        {discountTag && (
          <div className="absolute top-0 left-0 z-10">
            <span className="discount-tag">{discountTag}</span>
          </div>
        )}

        {/* Hover Add to Cart */}
        <div className="hidden absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-full bg-black text-white py-3 hover:bg-gray-800" onClick={()=>{toast("Added to bag !")}}>
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Title & Price */}
      <div className="product-title-and-price">
        <Link to={`/product/${id}`}>
          <p className="pt-5 text-xs lg:text-sm md:text-sm">{title}</p>
        </Link>
        <p className="pt-1 text-xs lg:text-sm md:text-sm">{price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
