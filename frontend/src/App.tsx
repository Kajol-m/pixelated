import { Route, Routes } from "react-router";
import Mainpage from "./pages/MainPage/Mainpage";
import Outfits from "./pages/Outfits/Outfits";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/outfits" element={<Outfits/>}/>
      <Route path="/product" element={<ProductDetails/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration fullName={""} email={""} password={""} confirmPassword={""}/>}/>
    </Routes>
    
    </>
  )
}

export default App;
