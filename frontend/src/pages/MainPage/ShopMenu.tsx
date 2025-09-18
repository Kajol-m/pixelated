import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

const ShopMenu: React.FC = () => {
  
  return (
    <div className="p-5 gap-6 flex flex-row items-center justify-center">
      <Button variant="primary" onClick={() => console.log("Shop Now Clicked")}>
        SHOP NEW ARRIVALS
      </Button>
      <Link to={`/product/tops`}>
        <Button
          variant="primary"
          onClick={() => console.log("Shop Clothing Clicked")}
        >
          SHOP TOPS
        </Button>
      </Link>
      <Link to="/product/bottoms">
        <Button
          variant="primary"
          onClick={() => console.log("Shop Plants Clicked")}
        >
          SHOP BOTTOMS
        </Button>
      </Link>
      <Link to={`/product/assessories`}>
      <Button
        variant="primary"
        onClick={() => console.log("Shop Artwork Clicked")}
      >
        SHOP ACCESSORIES
      </Button>
      </Link>
      <Link to ={'/bestsellers'}>
      <Button
        variant="primary"
        onClick={() => console.log("Shop Bestsellers Clicked")}
      >
        SHOP BESTSELLERS
      </Button>
      </Link>
    </div>
  );
};

export default ShopMenu;
