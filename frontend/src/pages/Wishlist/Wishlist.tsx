import Header from "@/common/Header/Header";
import OutfitsMain from "../Outfits/OutfitsMain";
import Footer from "@/common/Footer/Footer";
import ItemCard from "@/common/ItemCard/ItemCard";
import Filter from "@/common/Filter/Filter";
import { useEffect, useState } from "react";

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
  const [products, setProducts] = useState<Product[]>([]);

  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const userId = user.user_id;

  useEffect(() => {
    if (!userId) return;

    const fetchProducts = async () => {
      const user = JSON.parse(localStorage.getItem("User") || "{}");
      const token = localStorage.getItem("token");
      if (!user.user_id || !token) return;
      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/users/wishlistProducts/${user.user_id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const response = await res.json();
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

        setProducts(transformed);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
    // window.location.reload();
  }, [userId]);

  return (
    <>
      <Header />
      {/* <div className="pt-[85px]"></div> */}
      <OutfitsMain subCategory={"wishlist"} />
      <Filter />
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 md:gap-5 gap-4 lg:px-8 lg:pb-8 md:px-8 md:pb-6 pb-4 px-4">
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
      </div>
      <Footer />
    </>
  );
};
export default Wishlist;
