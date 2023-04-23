import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';


function App() {


  return (
    <div className="App">
      {/* <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount /> */}
       <Router>
          <NavBar />
          <HeaderContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCount/>}/>
            {/* <Route path='/pika' element={<Pika/>}/> */}
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;