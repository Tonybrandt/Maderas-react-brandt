import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer}  from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';


function App() {

  return (
    <CartProvider>
    <div className="App">
       <Router>
          <NavBar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCount/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
    </CartProvider>
    
  );
}

export default App;