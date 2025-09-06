const ImageDetails:React.FC=()=>{
    return(
        <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-6 w-[75px]">
                <img src="\top-5\top-5-a.webp" alt="" />
                <img src="\top-5\top-5-b.webp" alt="" />
                <img src="\top-5\top-5-c.webp" alt="" />
                <img src="\top-5\top-5-d.webp" alt="" />
                <img src="\top-5\top-5-e.webp" alt="" />
            </div>
            <div className="w-3/4">
                <img src="\top-5\top-5-a.webp" alt="" />
            </div>
        </div>
    )
}
export default ImageDetails;