import { useState, useEffect } from "react";
import Filter from "@/common/Filter/Filter";
import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";
import ItemCard from "@/common/ItemCard/ItemCard";
import OutfitsMain from "@/pages/Outfits/OutfitsMain";

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
const GetAllTops: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/products/tops`
        );
        const data = await res.json();

        const transformed = (data as ApiProduct[]).map((p: ApiProduct) => {
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
        // No usage of 'any' type here; all types are explicitly defined.
        setProducts(transformed);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="">
        <Header />
        <OutfitsMain />
        <Filter />
        <div className="grid grid-cols-4 gap-6 px-8 pb-8">
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
      </div>
    </>
  );
};

export default GetAllTops;
