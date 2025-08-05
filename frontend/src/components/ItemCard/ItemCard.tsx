import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface ItemCardsProps {
  imgUrl?: string;
  imgHoverUrl?: string;
  discountTag?: string;
  title?: string;
  price?: string;
}
const ItemCard: React.FC<ItemCardsProps> = ({
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
      <div className="pl-4 pr-4 pt-8 pb-8 w-1/4">
        <div className="relative group w-full">
          <img src={imgUrl} alt={title} className="w-full block" />
          <img
            src={imgHoverUrl}
            alt={title}
            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
          />

          <div className="wishlist absolute top-5 right-7 w- z-10">
            <button onClick={toggleWishlist}>
              {wishlisted ? <AiFillHeart className="text-xl" /> : <AiOutlineHeart  className="text-xl" />}
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
        <p className="pt-5 text-sm">{title}</p>
        <p className="pt-1 text-sm">{price}</p>
      </div>
    </>
  );
};
export default ItemCard;
