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
import ProtectedRoute from "./hooks/ProtectedRoute";
import Search from "./common/HeaderSearch/Search";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ScrollToTop />
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
          <Route
            path="/shopping-cart"
            element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            }
          />
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
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/category" element={<Category />} />
          <Route path="/terms" element={<TermsPolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/address"
            element={
              <ProtectedRoute>
                <Addresses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/address/add"
            element={
              <ProtectedRoute>
                <AddAddress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/address/edit/:address_id"
            element={
              <ProtectedRoute>
                <EditAddress />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
