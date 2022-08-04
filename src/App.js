import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import AddProducts from './components/AddProducts/AddProducts';
import UpdateProducts from './components/UpdateProducts/UpdateProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageProducts" element={<ManageProducts />} />
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/product/update/:id" element={<UpdateProducts />} />
      </Routes>
    </div>
  );
}

export default App;
