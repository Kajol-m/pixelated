import { Route, Routes } from "react-router";
import Mainpage from "./pages/MainPage/Mainpage";
import Outfits from "./pages/Outfits/Outfits";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/outfits" element={<Outfits/>}/>
      <Route path="/product" element={<ProductDetails/>}/>
    </Routes>
    
    </>
  )
}

export default App;
