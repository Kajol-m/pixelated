import { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Swiper = lazy(() =>
  import("swiper/react").then((mod) => ({ default: mod.Swiper }))
);

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
    const baseUrl = import.meta.env.VITE_API_URL;
    const fetchImages = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products/${id}/images`);
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
      <div className="hidden lg:flex flex-row gap-8">
        {/* Thumbnails */}
        <div className="flex flex-col gap-6 w-[100px] overflow-y-auto ">
          {images.map((img) => (
            <img
              key={img.image_id}
              src={img.image_url}
              alt={img.image_alt_text || "product image"}
              className="cursor-pointer border border-gray-300 hover:border-black"
              onClick={() => setMainImage(img.image_url)}
            />
          ))}
        </div>

        {/* Main image */}
        <div className="w-full">
          {mainImage && (
            <img src={mainImage} alt="Main product" className="w-full h-auto" />
          )}
        </div>
      </div>
      <div className="block lg:hidden w-full">
        <Swiper
          modules={[Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-auto custom-swiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.image_id} >
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
