import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

const Collection: React.FC = () => {
  const collections = [
    {
      id: "COL00000001",
      name: "Pretty In Pink",
      image: "/prettyPink.webp", // put images in public/collections/
    },
    {
      id: "COL00000002",
      name: "Denim Dusk",
      image: "/denimDusk.webp",
    },
    {
      id: "COL00000003",
      name: "Desert Glow",
      image: "/desertGlow.webp",
    },
    {
      id: "COL00000004",
      name: "Crimson Flame",
      image: "crimsonFlame.webp",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 cursor-pointer ">
      {collections.map((col) => (
        <div key={col.id} className="relative">
          <Link to={`/collections/${col.id}`}>
            <img
              src={col.image}
              alt={col.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link to={`/collections/${col.id}`}>
            <Button
              variant="primary"
              onClick={() => console.log(`Shop ${col.name} Collection Clicked`)}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              SHOP {col.name.toUpperCase()}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Collection;