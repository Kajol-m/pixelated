import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";


const Collection: React.FC = () => {
  const [prettyInPink, setPrettyInPink] = useState<string | null>(null);
  const [denimDusk, setDenimDusk] = useState<string | null>(null);
  const [desertGlow, setDesertGlow] = useState<string | null>(null);
  const [crimsonFlame, setCrimsonFlame] = useState<string | null>(null);

  useEffect(() => {
    const getPrettyInPinkImage = async () => {
      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/products/collectionimage/PrettyInPink`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setPrettyInPink(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      }
    };
    getPrettyInPinkImage();
  }, []);

  useEffect(() => {
    const getDenimDuskImage = async () => {
      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/products/collectionimage/DenimDusk`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setDenimDusk(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      }
    };
    getDenimDuskImage();
  }, []);

  useEffect(() => {
    const getDesertGlowImage = async () => {
      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/products/collectionimage/DesertGlow`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setDesertGlow(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      }
    };
    getDesertGlowImage();
  }, []);

  useEffect(() => {
    const getCrimsonFlameImage = async () => {
      try {
        const res = await fetch(
          `https://pixelated-node-2.onrender.com/api/products/collectionimage/CrimsonFlame`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setCrimsonFlame(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      }
    };
    getCrimsonFlameImage();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 ">
      <div className="relative">
        <img
          src={prettyInPink ?? undefined}
        //   src="/Pink-bow-top.webp"
          alt="Coquette-Collection"
          className="w-full h-full object-cover"
        />
        <Link to={`/collections/COL00000001`}>
          <Button
            variant="primary"
            onClick={() => console.log("Shop Coquette Collection Clicked")}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            SHOP PRETTY IN PINK
          </Button>
        </Link>
      </div>
      <div className="relative">
        <img
          src={denimDusk ?? undefined}
        // src="/White-hoodie.webp"
          alt="Coquette-Collection"
          className="w-full h-full object-cover"
        />
        <Link to={`/collections/COL00000002`}>
          <Button
            variant="primary"
            onClick={() => console.log("Shop Coquette Collection Clicked")}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            SHOP DENIM DUSK
          </Button>
        </Link>
      </div>
      <div className="relative">
        <img
          src={desertGlow ?? undefined}
          alt="Coquette-Collection"
          className="w-full h-full object-cover"
        />
        <Link to={`/collections/COL00000003`}>
          <Button
            variant="primary"
            onClick={() => console.log("Shop Coquette Collection Clicked")}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            SHOP DESERT GLOW
          </Button>
        </Link>
      </div>
      <div className="relative">
        <img
          src={crimsonFlame ?? undefined}
          alt="Coquette-Collection"
          className="w-full h-full object-cover"
        />
        <Link to={`/collections/COL00000004`}>
          <Button
            variant="primary"
            onClick={() => console.log("Shop Coquette Collection Clicked")}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            SHOP CRIMSON FLAME
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Collection;
