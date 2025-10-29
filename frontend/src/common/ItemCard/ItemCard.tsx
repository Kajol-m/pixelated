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
    <div className="lg:px-4 md:px-4 px-3 lg:py-8 md:py-8 pt-4 pb-2">
      <div className="relative group overflow-hidden product-image-wishlist-and-addtocart">
        <Link to={`/product/${id}`}>
          <img
            src={imgUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover block"
          />
        </Link>
        <Link to={`/product/${id}`}>
          <img
            src={imgHoverUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
          />
        </Link>

        {/* ❤️ Wishlist Button */}
        <div className="wishlist absolute lg:top-4 lg:right-4 md:to-3 md:right-5 top-2 right-2 z-10 ">
          <button onClick={handleWishlist}>
            {wishlisted ? (
              <AiFillHeart className="lg:text-2xl md:text-2xl text-xl cursor-pointer" />
            ) : (
              <AiOutlineHeart className="lg:text-2xl md:text-2xl text-xl cursor-pointer" />
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
