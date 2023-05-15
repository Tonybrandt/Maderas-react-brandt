import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';

// import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
// import { SectionIntro } from './components/SectionIntro/SectionIntro';
import { CartScreen } from './components/CartScreen/CartScreen';


function App() {

  return (
    <CartProvider >
    <div className="App">
       <Router>
          <NavBar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
    </div>
    </CartProvider>
  );
}

export default App;