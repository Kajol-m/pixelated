// const ImageDetails:React.FC=()=>{
//     return(
//         <div className="flex flex-row gap-6">
//             <div className="flex flex-col gap-6 w-[75px]">
//                 <img src="\top-5\top-5-a.webp" alt="" />
//                 <img src="\top-5\top-5-b.webp" alt="" />
//                 <img src="\top-5\top-5-c.webp" alt="" />
//                 <img src="\top-5\top-5-d.webp" alt="" />
//                 <img src="\top-5\top-5-e.webp" alt="" />
//             </div>
//             <div className="w-3/4">
//                 <img src="\top-5\top-5-a.webp" alt="" />
//             </div>
//         </div>
//     )
// }
// export default ImageDetails;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ProductImage {
  image_id: string;
  image_url: string;
  image_alt_text?: string;
  display_order?: number;
}

const ImageDetails: React.FC = () => {
  const { id } = useParams(); // productId from route (/product/:id)
  const [images, setImages] = useState<ProductImage[]>([]);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchImages = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}/images`);
        const data = await res.json();

        if (data && data.length > 0) {
          setImages(data);
          setMainImage(data[0].image_url); // show first image by default
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      }
    };

    fetchImages();
  }, [id]);

  return (
    <>
    <div className="hidden lg:flex flex-row gap-6">
      {/* Thumbnails */}
      <div className="flex flex-col gap-6 w-[75px] overflow-y-auto ">
        {images.map((img) => (
          <img
            key={img.image_id}
            src={img.image_url}
            alt={img.image_alt_text || "product image"}
            className="cursor-pointer border hover:border-black"
            onClick={() => setMainImage(img.image_url)}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="w-3/4">
        {mainImage && (
          <img src={mainImage} alt="Main product" className="w-full h-auto" />
        )}
      </div>
    </div>
    <div className="block lg:hidden w-full">
        <Swiper
          modules={[ Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-auto custom-swiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.image_id}>
              <img
                src={img.image_url}
                alt={img.image_alt_text || "product image"}
                className="w-full h-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageDetails;
