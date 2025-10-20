import Filter from "../../common/Filter/Filter";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import ItemCard from "../../common/ItemCard/ItemCard";
import OutfitsMain from "./OutfitsMain";

const Outfits: React.FC = () => {
  return (
    <>
      <div className="">
        <Header />
        <OutfitsMain />
        <Filter filters={["Tops","Bottom","Accessories"]} />
        <div className="flex px-8">
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
        </div>
        <div className="flex px-8">
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
        </div>
        <div className="flex px-8 pb-8">
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            id={"1"}
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Outfits;
