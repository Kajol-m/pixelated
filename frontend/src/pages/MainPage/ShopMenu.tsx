import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

const ShopMenu: React.FC = () => {
  const collectionId='COL00000004';
  return (
    <div className="lg:p-5 p-3 gap-6 flex flex-row items-center justify-center">
      <Link to={`/collections/${collectionId}`}>
      <Button variant="primary" onClick={() => {}} className="hidden sm:block">
        SHOP NEW ARRIVALS
      </Button>
      </Link>
      <Link to={`/product/tops`}>
        <Button
          variant="primary"
          onClick={() => {}}
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
        onClick={() => console.log("Shop Bestsellers Clicked")} className="hidden sm:block"
      >
        SHOP BESTSELLERS
      </Button>
      </Link>
    </div>
  );
};

export default ShopMenu;
