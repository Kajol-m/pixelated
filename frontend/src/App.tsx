import { Route, Routes } from "react-router";
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
import Profile from "./pages/Profile/Profile";
import { WishlistProvider } from "./hooks/WishlistProvider";
import Wishlist from "./pages/Wishlist/Wishlist";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster } from "sonner";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import NotFound from "./pages/ErrorBoundary/NotFound";
// import CrashTest from "./pages/ErrorBoundary/CrashTest";
function App() {
  return (
    <><ErrorBoundary>
      <ScrollToTop />
      <WishlistProvider>
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            duration: 1800,
          }}
        />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/outfits" element={<Outfits />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/collections/:collectionId"
            element={<CollectionPage />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/bestsellers" element={<Bestseller />} />
          <Route path="/product/tops" element={<GetAllTops />} />
          <Route path="/product/bottoms" element={<GetAllBottoms />} />
          <Route path="/product/skirts" element={<GetAllSkirts />} />
          <Route path="/product/dresses" element={<GetAllDresses />} />
          <Route path="/product/accessories" element={<GetAllAccessories />} />
          <Route path="/product/clothing" element={<GetAllClothing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound/>}/>
          {/* <Route path="/crash" element={<CrashTest />} /> 👈 test route */}
        </Routes>
      </WishlistProvider>
     </ErrorBoundary>
    </>
  );
}

export default App;
