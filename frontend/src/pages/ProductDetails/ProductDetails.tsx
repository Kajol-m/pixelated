import Details from "./Details";
import ImageDetails from "./ImageDetails";

const ProductDetails: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <ImageDetails />
      </div>
      <div className="w-1/2">
        <Details />
      </div>
    </div>
  );
};
export default ProductDetails;
