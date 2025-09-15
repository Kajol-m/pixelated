import Button from "../../components/Button/Button";

const OutfitsMain:React.FC=()=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center  border-b-1 border-t-1 border-gray-300 pt-[90px]">
            <hr className="border-gray-300 h-px w-full" />
            <p className="text-3xl text-black pb-8 pt-[50px] text-center ">WOMEN'S CLOTHING</p>
            <div className="flex gap-[100px] pb-8">
                <Button variant="primary" onClick={()=>{}} >SHOP T-SHIRT</Button>
                <Button variant="primary" onClick={()=>{}} >SHOP TOPS</Button>
                <Button variant="primary" onClick={()=>{}} >SHOP SKIRT</Button>
            </div>
        </div>
        </>
    )
}
export default OutfitsMain;