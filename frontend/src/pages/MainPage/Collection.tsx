import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Collection: React.FC = () => {
  const [prettyInPink, setPrettyInPink] = useState<string | null>(null);
  const [denimDusk, setDenimDusk] = useState<string | null>(null);
  const [desertGlow, setDesertGlow] = useState<string | null>(null);
  const [crimsonFlame, setCrimsonFlame] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getPrettyInPinkImage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${baseUrl}/api/products/collectionimage/PrettyInPink`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setPrettyInPink(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      } finally {
        setLoading(false);
      }
    };
    getPrettyInPinkImage();
  }, []);

  useEffect(() => {
    const getDenimDuskImage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${baseUrl}/api/products/collectionimage/DenimDusk`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setDenimDusk(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      } finally {
        setLoading(false);
      }
    };
    getDenimDuskImage();
  }, []);

  useEffect(() => {
    const getDesertGlowImage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${baseUrl}/api/products/collectionimage/DesertGlow`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setDesertGlow(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      } finally {
        setLoading(false);
      }
    };
    getDesertGlowImage();
  }, []);

  useEffect(() => {
    const getCrimsonFlameImage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${baseUrl}/api/products/collectionimage/CrimsonFlame`
        );
        const data = await res.json();

        if (data && data.collection_image) {
          setCrimsonFlame(data.collection_image);
        }
      } catch (err) {
        console.error("Error fetching product images:", err);
      } finally {
        setLoading(false);
      }
    };
    getCrimsonFlameImage();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 cursor-pointer ">
      <div className="relative">
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Link to={`/collections/COL00000001`}>
            <img
              src={prettyInPink ?? undefined}
              alt="Coquette-Collection"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Link>
        )}
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
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Link to={`/collections/COL00000002`}>
            <img
              src={denimDusk ?? undefined}
              alt="Coquette-Collection"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Link>
        )}
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
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Link to={`/collections/COL00000003`}>
            <img
              src={desertGlow ?? undefined}
              alt="Coquette-Collection"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Link>
        )}
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
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Link to={`/collections/COL00000004`}>
            <img
              src={crimsonFlame ?? undefined}
              alt="Coquette-Collection"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Link>
        )}
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
