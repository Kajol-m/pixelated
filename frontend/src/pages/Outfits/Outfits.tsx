import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import OutfitsMain from "./OutfitsMain";

const Outfits: React.FC = () => {
  return (
    <>
      <div className="">
        <Header />
        <OutfitsMain />
        <Filter />
        <div className="flex px-8">
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          
        </div>
        <div className="flex px-8">
            <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
        </div>
        <div className="flex px-8 pb-8">
            <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
            imgUrl="/Pink-bow-top.webp"
            imgHoverUrl="/Pink-bow-top2.webp"
            title="PRETTY BOW BEADED EEMBROIDERY BABY TEE"
            price="$ 200"
          />
          <ItemCard
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
