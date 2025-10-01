import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './pages/Home/Home';
import Favourite from './pages/Favourite/Favourite';
import Detail from './pages/Details/Details';

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourites" element={<Favourite />} />
        <Route path="/recipe-item/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
