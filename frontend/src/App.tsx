import { Route, Routes } from "react-router";
import Mainpage from "./pages/MainPage/Mainpage";
import Outfits from "./pages/Outfits/Outfits";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/outfits" element={<Outfits/>}/>
    </Routes>
    
    </>
  )
}

export default App;
