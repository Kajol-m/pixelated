import { Route, Routes} from "react-router";
import Mainpage from "./pages/MainPage/Mainpage";
import Outfits from "./pages/Outfits/Outfits";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import ShoppingCart from "./pages/Shopping-cart/ShoppingCart";
import CollectionPage from "./pages/Collection/PrettyInPink/CollectionPage";
function App() {

  return (
    
    <>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/outfits" element={<Outfits/>}/>
      <Route path="/product" element={<ProductDetails/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/shoppingcart" element={<ShoppingCart/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/collections/:collectionId" element={<CollectionPage/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    
    </>
  )
}

export default App;
