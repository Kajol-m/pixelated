import Header from "@/common/Header/Header";
import ProfileImageSection from "./ProfileImageSection";
import ProfileInformationSection from "./ProfileInformationSection";

const Profile:React.FC=()=>{
    return(
        <>
        <Header/>
        <div className="pt-[85px]"></div>
        <div>
            <ProfileImageSection/>
            <ProfileInformationSection/>
        </div>
        </>
    )
}
export default Profile;