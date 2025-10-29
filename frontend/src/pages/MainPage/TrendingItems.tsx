import { useEffect, useState } from "react";
import ItemCard from "../../common/ItemCard/ItemCard";
import { useNavigate } from "react-router-dom";
import { ItemCardSkeleton } from "@/common/ItemCard/ItemCardSkeleton";

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
const TrendingItems: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchTrendingItems = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${baseUrl}/api/trending/trending-items`);
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
        setError("Failed to load trending items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingItems();
  }, []);
  return (
    <>
      <div className="lg:py-4 md:py-4 py-2">
        <div className="overflow-x-auto scroll-smooth scrollbar-hide grid grid-flow-col lg:auto-cols-[25%] md:auto-cols-[50%] auto-cols-[50%] lg:gap-4 lg:px-8">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <ItemCardSkeleton key={i} />
            ))
          ) : error ? (
            <div className="flex items-center justify-center w-full text-red-500 font-medium">
              {error}
            </div>
          ) : (
            products.map((product) => (
              <ItemCard
                id={product.id}
                key={product.id}
                imgUrl={product.image}
                imgHoverUrl={product.hover_image}
                title={product.name}
                price={`$ ${product.price}`}
              />
            ))
          )}
          {/* Arrow / See All Card */}
          <div
            className="flex-shrink-0 w-full lg:min-w-[250px]  flex items-center justify-center  cursor-pointer hover:bg-gray-100"
            onClick={() => navigate("/trending")}
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
export default TrendingItems;
