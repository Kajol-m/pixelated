import { useEffect, useState } from "react";
import ItemCard from "../../common/ItemCard/ItemCard";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  hover_image?: string;
}
interface ApiImage {
  display_order: number;
  url: string;
}

interface ApiProduct {
  product_id: string;
  product_name: string;
  price: string;
  images: ApiImage[];
}
const BestsellerCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchBestsellerItems = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/bestseller/bestseller-items`
        );
        const data = await res.json();
        const imageRequired = (data as ApiProduct[]).map((p: ApiProduct) => {
          const primary =
            p.images.find((img: ApiImage) => img.display_order === 1)?.url ||
            "";
          const hover =
            p.images.find((img: ApiImage) => img.display_order === 2)?.url ||
            "";

          return {
            id: p.product_id,
            name: p.product_name,
            price: p.price,
            image: primary,
            hover_image: hover,
          };
        });
        setProducts(imageRequired);
      } catch (err) {
        console.error("Error fetching trending items:", err);
      }
    };
    fetchBestsellerItems();
  },[]);
  return (
    <>
      {/* <div className="grid grid-cols-4 gap-6 px-8 pb-8">
        {products.map((product) => (
            <ItemCard
              id={product.id}
              key={product.id}
              imgUrl={product.image}
              imgHoverUrl={product.hover_image}
              title={product.name}
              price={`$ ${product.price}`}
            />
          ))}
      </div> */}
      <div className="overflow-x-auto px-8 py-4 scrollbar-hide">
      <div className="grid grid-flow-col lg:auto-cols-[25%] md:auto-cols-[50%] auto-cols-[50%] gap-4 items-center">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            imgHoverUrl={product.hover_image}
            title={product.name}
            price={`$ ${product.price}`}
          />
        ))}

        {/* Arrow / See All Card */}
        <div
          className="flex-shrink-0 w-full min-w-[250px] flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/bestsellers")}
        >
          <span className="text-lg font-semibold flex items-center gap-2">
            See All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>

    </>
  );
};
export default BestsellerCarousel;
