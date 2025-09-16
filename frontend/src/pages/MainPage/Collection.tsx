import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Collection: React.FC=()=>{
    return(
        <div className="flex">
        <div className="w-1/4 relative">
            <img src="/Pink-bow-top.webp" alt="Coquette-Collection" className="w-full"/>
            <Link  to={`/collections/COL00000001`}><Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP PINK</Button></Link>
        </div>
        <div className="w-1/4 relative">
            <img src="/White-hoodie.webp" alt="Coquette-Collection" className="w-full"/>
            <Link  to={`/collections/COL00000002`}><Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP DENIM</Button></Link>
        </div>
        <div className="w-1/4 relative">
            <img src="/Pink-bow-top.webp" alt="Coquette-Collection" className="w-full"/>
            <Link  to={`/collections/COL00000003`}><Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP BROWN</Button></Link>
        </div>
        <div className="w-1/4 relative">
            <img src="/White-hoodie.webp" alt="Coquette-Collection" className="w-full"/>
            <Link  to={`/collections/COL00000004`}><Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP RED</Button></Link>
        </div>
        </div>
    )
}
export default Collection;