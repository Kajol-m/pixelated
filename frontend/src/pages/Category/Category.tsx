import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  categoryLink: string;
}

export const CategoryCard = ({
  imgSrc,
  imgAlt,
  title,
  categoryLink,
}: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link to={categoryLink}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full  border border-gray-300 p-2 hover:border-black cursor-pointer "
        />
      </Link>
      <Link
        to={categoryLink}
        className="mt-2 text-lg font-semibold text-gray-800 hover:underline underline-offset-4 decoration-1 cursor-pointer"
      >
        {title}
      </Link>
    </div>
  );
};

const Category = () => {
  return (
    <>
      <Header />
      <p className="text-xl lg:pl-5 ml-8 pr-8 mr-2 lg:pt-[90px] md:pt-[90px] pt-[85px]">
        CATEGORY
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[100px] md:gap-[25px] gap-4 justify-center items-center  lg:p-[50px] md:p-[20px] p-[15px]">
        <CategoryCard
          imgSrc={"/Top.webp"}
          imgAlt={"Tops"}
          title={"Tops"}
          categoryLink={"/product/tops"}
        />
        <CategoryCard
          imgSrc={"/Bottom.webp"}
          imgAlt={"Bottoms"}
          title={"Bottoms"}
          categoryLink={"/product/bottoms"}
        />
        <CategoryCard
          imgSrc={"/Dress.webp"}
          imgAlt={"Dresses"}
          title={"Dresses"}
          categoryLink={"/product/dresses"}
        />
        <CategoryCard
          imgSrc={"/Accessories.webp"}
          imgAlt={"Accessories"}
          title={"Accessories"}
          categoryLink={"/product/accessories"}
        />
      </div>
      <Footer/>
    </>
  );
};
export default Category;
