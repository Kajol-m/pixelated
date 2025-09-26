import { Route, Routes} from "react-router";
import Mainpage from "./pages/MainPage/Mainpage";
import Outfits from "./pages/Outfits/Outfits";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import ShoppingCart from "./pages/Shopping-cart/ShoppingCart";
import CollectionPage from "./pages/Collection/PrettyInPink/CollectionPage";
import Trending from "./pages/Trending/Trending";
import Bestseller from "./pages/Bestseller/Bestseller";
import GetAllTops from "./pages/Filters/GetAllTops";
import GetAllBottoms from "./pages/Filters/GetAllBottoms";
import GetAllSkirts from "./pages/Filters/GetAllSkirts";
import GetAllDresses from "./pages/Filters/GetAllDresses";
import GetAllAccessories from "./pages/Filters/GetAllAccessories";
import GetAllClothing from "./pages/Filters/GetAllClothing";
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
      <Route path="/trending" element={<Trending />} />
      <Route path="/bestsellers" element={<Bestseller />} />
      <Route path="/product/tops" element={<GetAllTops />} />
      <Route path="/product/bottoms" element={<GetAllBottoms />} />
      <Route path="/product/skirts" element={<GetAllSkirts />} />
      <Route path="/product/dresses" element={<GetAllDresses />} />
      <Route path="/product/accessories" element={<GetAllAccessories />} />
      <Route path="/product/clothing" element={<GetAllClothing />} />

    </Routes>
    
    </>
  )
}

export default App;
