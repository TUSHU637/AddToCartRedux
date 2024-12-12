import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Product from './pages/Product';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<Product />} />
       <Route path="/cart" element={<Cart />} />
       </Routes>
       
    </BrowserRouter>
     
    </div>

  );
}

export default App;
