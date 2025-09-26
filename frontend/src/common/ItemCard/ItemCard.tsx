import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router";

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
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    if (!wishlisted) setWishlisted(true);
    else setWishlisted(false);
  };

  return (
    <>
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

          <div className="wishlist absolute top-5 right-7 w- z-10">
            <button onClick={toggleWishlist}>
              {wishlisted ? (
                <AiFillHeart className="text-xl" />
              ) : (
                <AiOutlineHeart className="text-xl" />
              )}
            </button>
          </div>
          <div className="absolute top-0 left-0 z-10">
            {discountTag && <span className="discount-tag">{discountTag}</span>}
          </div>
          <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="w-full bg-black text-white py-3 hover:bg-gray-800">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="product-title-and-price">
          <Link to={`/product/${id}`}>
            <p className="pt-5 text-xs lg:text-sm md:text-sm ">{title}</p>
          </Link>

          <p className="pt-1 text-xs lg:text-sm md:text-sm ">{price}</p>
        </div>
      </div>
    </>
  );
};
export default ItemCard;
