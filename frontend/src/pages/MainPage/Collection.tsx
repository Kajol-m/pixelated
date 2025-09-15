import Button from "../../components/Button/Button";

const Collection: React.FC=()=>{
    return(
        <div className="flex">
        <div className="w-1/4 relative">
            <img src="/Pink-bow-top.webp" alt="Coquette-Collection" className="w-full"/>
            <Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP COQUETTE</Button>
        </div>
        <div className="w-1/4 relative">
            <img src="/White-hoodie.webp" alt="Coquette-Collection" className="w-full"/>
            <Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP SWEATSHIRT</Button>
        </div>
        <div className="w-1/4 relative">
            <img src="/Pink-bow-top.webp" alt="Coquette-Collection" className="w-full"/>
            <Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP COQUETTE</Button>
        </div>
        <div className="w-1/4 relative">
            <img src="/White-hoodie.webp" alt="Coquette-Collection" className="w-full"/>
            <Button variant="primary" onClick={() => console.log("Shop Coquette Collection Clicked")} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SHOP SWEATSHIRT</Button>
        </div>
        </div>
    )
}
export default Collection;