// import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";

interface OutfitsMainProps {
  subCategory?: string;
}
const OutfitsMain: React.FC<OutfitsMainProps> = ({ subCategory }) => {
  const [productName, setProductName] = useState("WOMEN'S CLOTHING");

  useEffect(() => {
    if (!subCategory) return;

    if (subCategory === "COL00000001") setProductName("PRETTY IN PINK");
    else if (subCategory === "COL00000002") setProductName("DENIM DUSK");
    else if (subCategory === "COL00000003") setProductName("DESERT GLOW");
    else if (subCategory === "COL00000004") setProductName("CRIMSON FLAME");
    else if (subCategory === "accessories") setProductName("SHOP ACCESSORIES");
    else if (subCategory === "tops") setProductName("SHOP TOPS");
    else if (subCategory === "bottoms") setProductName("SHOP BOTTOMS");
    else if (subCategory === "dresses") setProductName("SHOP DRESSES");
    else if (subCategory === "skirts") setProductName("SHOP SKIRTS");
    else if (subCategory === "bestsellers") setProductName("SHOP BESTSELLERS");
    else if (subCategory === "trending") setProductName("SHOP TRENDING");
    else if (subCategory === "wishlist") setProductName("WISHLIST");
    else setProductName("WOMEN'S CLOTHING"); // default
  }, [subCategory]);

  return (
    <>
      <div className="flex flex-col justify-center items-center  border-b-1 border-t-1 border-gray-300 lg:pt-[90px] pt-[75px]">
        <hr className="border-gray-300 h-px w-full" />
        <p className="text-3xl text-black lg:pb-8 pb-4 lg:pt-[35px] pt-[15px] text-center ">
          {productName}
        </p>
        {/* <div className="flex gap-[100px] pb-8">
                <Button variant="primary" onClick={()=>{}} >SHOP T-SHIRT</Button>
                <Button variant="primary" onClick={()=>{}} >SHOP TOPS</Button>
                <Button variant="primary" onClick={()=>{}} >SHOP SKIRT</Button>
            </div> */}
      </div>
    </>
  );
};
export default OutfitsMain;
