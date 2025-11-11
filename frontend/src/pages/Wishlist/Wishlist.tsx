import Header from "@/common/Header/Header";
import OutfitsMain from "../Outfits/OutfitsMain";
import Footer from "@/common/Footer/Footer";
import ItemCard from "@/common/ItemCard/ItemCard";
import Filter from "@/common/Filter/Filter";
import { useEffect} from "react";
import api from "@/lib/api";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist} from "@/store/features/wishlistSlice";
import type { RootState } from "@/store/store";

interface ProductImage {
  url: string;
  display_order: number;
}

interface ProductApi {
  product_id: string;
  product_name: string;
  price: string;
  images: ProductImage[];
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  hover_image?: string;
}

const Wishlist: React.FC = () => {
  const products = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const token = localStorage.getItem("token");
  const userId = user.user_id;

  useEffect(() => {
    if (!userId) return;

    const fetchProducts = async () => {
      try {
        const res = await api.get(
          `/api/users/wishlistProducts/${user.user_id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const response = await res.data;
        const data: ProductApi[] = response.wishlist || [];

        const transformed: Product[] = data.map((p) => {
          const primary =
            p.images.find((img) => img.display_order === 1)?.url || "";
          const hover =
            p.images.find((img) => img.display_order === 2)?.url || "";

          return {
            id: p.product_id,
            name: p.product_name,
            price: p.price,
            image: primary,
            hover_image: hover,
          };
        });
        dispatch(setWishlist(transformed));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [userId]);

  return (
    <>
      <Header />
      <OutfitsMain subCategory={"wishlist"} />
      <Filter filters={["Tops", "Bottom", "Accessories"]} />
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 md:gap-5 gap-4 lg:px-8 lg:pb-8 md:px-8 md:pb-6 pb-4 px-4">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-xl text-gray-800 lg:py-[160px] md:py-[100px] px-8">
            Your wishlist is empty
          </p>
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
      </div>

      <Footer />
    </>
  );
};
export default Wishlist;
