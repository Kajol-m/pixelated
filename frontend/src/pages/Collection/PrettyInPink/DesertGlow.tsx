import { useState, useEffect } from "react";
import Filter from "../../../common/Filter/Filter";
import Footer from "../../../common/Footer/Footer";
import Header from "../../../common/Header/Header";
import ItemCard from "../../../common/ItemCard/ItemCard";
import { ItemCardSkeleton } from "@/common/ItemCard/ItemCardSkeleton";
// import OutfitsMain from "../../Outfits/OutfitsMain";

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
const DesertGlow: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const collectionId = "COL00000003";
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (!collectionId) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${baseUrl}/api/products/collections/${collectionId}`
        );
        const data: ProductApi[] = await res.json();

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
      finally {
        setLoading(false); // stop skeletons
      }
    };

    fetchProducts();
  }, [collectionId]);

  return (
    <>
      <div className="">
        <Header />
        {/* <OutfitsMain /> */}
        <Filter filters={["Tops","Bottom","Accessories"]}/>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 md:gap-5 lg:px-8 lg:pb-8 md:px-8 md:pb-6 pb-4 px-2">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ItemCardSkeleton key={i} />
              ))
            : products.map((product) => (
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
      </div>
    </>
  );
};

export default DesertGlow;
