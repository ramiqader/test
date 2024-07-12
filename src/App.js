import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbars from './Navbar';
import Stocks from './components/stocks';
import Favourites from './components/favourites';
import Cart from './components/cart';

function App() {
  return (
   <>
    <Navbars/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/favourites"  element={<Favourites />}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </div>
    </>
   
  );
}

export default App;