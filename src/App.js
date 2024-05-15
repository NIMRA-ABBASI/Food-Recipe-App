import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Favourite from './Pages/Favourites/Favourite'
import Detail from './Pages/Details/Detail'
function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Favourites' element={<Favourite/>}/>
          <Route path='/recipe-item/:id' element={<Detail/>}/>
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
