import { selectProfile } from "@/store/features/userSlice";
import { useSelector } from "react-redux";

const Account=()=>{
  const profile =useSelector(selectProfile);
    return(
        <div className="p-8 py-8">
        <h2 className="font-bold">ACCOUNT</h2>
        <h3>{profile.fullName || "No name available"}</h3>
      </div>
    )
}
export default Account;