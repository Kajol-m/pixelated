import { useState, useEffect } from "react";
import Filter from "../../../common/Filter/Filter";
import Footer from "../../../common/Footer/Footer";
import Header from "../../../common/Header/Header";
import ItemCard from "../../../common/ItemCard/ItemCard";
import OutfitsMain from "../../Outfits/OutfitsMain";

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
  const collectionId = "COL00000003";

  useEffect(() => {
  if (!collectionId) return;

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/collections/${collectionId}`
      );
      const data:ProductApi[] = await res.json();

      const transformed:Product[] = data.map((p) => {
        const primary = p.images.find((img) => img.display_order === 1)?.url || "";
        const hover = p.images.find((img) => img.display_order === 2)?.url || "";

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
}, [collectionId]);


  return (
    <>
      <div className="">
        <Header />
        <OutfitsMain />
        <Filter />
        <div className="grid grid-cols-4 gap-6 px-8 pb-8">
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DesertGlow;
