import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const ShopMenu: React.FC = () => {
  return (
    <div className="p-5 gap-6 flex flex-row items-center justify-center">
      <Button variant="primary" onClick={() => console.log("Shop Now Clicked")}>
        SHOP NEW ARRIVALS
      </Button>
      <Link to={`/collections/COL00000001`}>
        <Button
          variant="primary"
          onClick={() => console.log("Shop Clothing Clicked")}
        >
          SHOP CLOTHING
        </Button>
      </Link>
      <Link to="/outfits">
        <Button
          variant="primary"
          onClick={() => console.log("Shop Plants Clicked")}
        >
          SHOP PLANTS
        </Button>
      </Link>
      <Button
        variant="primary"
        onClick={() => console.log("Shop Artwork Clicked")}
      >
        SHOP ARTWORK
      </Button>
      <Button
        variant="primary"
        onClick={() => console.log("Shop Bestsellers Clicked")}
      >
        SHOP BESTSELLERS
      </Button>
    </div>
  );
};

export default ShopMenu;
