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
import GetAllTops from "./pages/Category/GetAllTops";
import GetAllBottoms from "./pages/Category/GetAllBottoms";
import GetAllSkirts from "./pages/Category/GetAllSkirts";
import GetAllDresses from "./pages/Category/GetAllDresses";
import GetAllAccessories from "./pages/Category/GetAllAccessories";
import GetAllClothing from "./pages/Category/GetAllClothing";
import Profile from "./pages/Profile/Profile";
import { WishlistProvider } from "./hooks/WishlistProvider";
import Wishlist from "./pages/Wishlist/Wishlist";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster } from "sonner";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import NotFound from "./pages/ErrorBoundary/NotFound";
import Category from "./pages/Category/Category";
import Overview from "./pages/Profile/Overview";
import TermsPolicy from "./pages/Profile/TermsPolicy";
import Addresses from "./pages/Profile/Addresses";
import PrivacyPolicy from "./pages/Profile/PrivacyPolicy";
import Orders from "./pages/Profile/Orders";
import EditProfile from "./pages/Profile/EditProfile";
import EditAddress from "./pages/Profile/EditAddress";
import AddAddress from "./pages/Profile/AddAddress";
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
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/terms" element={<TermsPolicy/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/address" element={<Addresses/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/address/add" element={<AddAddress/>}/>
          <Route path="/address/edit/:address_id" element={<EditAddress />} />


          {/* <Route path="/crash" element={<CrashTest />} /> 👈 test route */}
        </Routes>
      </WishlistProvider>
     </ErrorBoundary>
    </>
  );
}

export default App;
