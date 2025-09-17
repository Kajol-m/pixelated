import ItemCard from "../../common/ItemCard/ItemCard";

const TrendingItems:React.FC=()=>{
    return(
        <>
        <div className="flex pl-8 ml-2 pr-8 mr-2">
        <ItemCard imgUrl="/Pink-bow-top.webp" imgHoverUrl="/Pink-bow-top2.webp" title="PRETTY BOW BEADED EEMBROIDERY BABY TEE" price="$ 200"/>
        <ItemCard imgUrl="/Pink-bow-top.webp" imgHoverUrl="/Pink-bow-top2.webp" title="PRETTY BOW BEADED EEMBROIDERY BABY TEE" price="$ 200"/>
        <ItemCard imgUrl="/Pink-bow-top.webp" imgHoverUrl="/Pink-bow-top2.webp" title="PRETTY BOW BEADED EEMBROIDERY BABY TEE" price="$ 200"/>
        <ItemCard imgUrl="/Pink-bow-top.webp" imgHoverUrl="/Pink-bow-top2.webp" title="PRETTY BOW BEADED EEMBROIDERY BABY TEE" price="$ 200"/>
        </div>
        </>
    )
}
export default TrendingItems;