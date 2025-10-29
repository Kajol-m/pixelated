import Button from "@/common/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-black text-center p-8">
        <p>Woops!</p>
        <p>Something went wrong</p>
        <div className="flex flex-row gap-8 pt-8">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
