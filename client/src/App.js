import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsForms from './components/ProductsForms';
import ProductsList from './components/ProductsList';
import ProductsView from './components/ProductsView';
import ProductsTabs from './components/ProductsTabs';
import ProductsEdit from './components/ProductsEdit';


function App() {

  return (

    <div className="container-md" >
      <BrowserRouter>
        <ProductsTabs />
        <Routes>
          <Route path='/products/new' element={<ProductsForms />} />
          <Route path='/products/all' element={<ProductsList />} />
          <Route path='/products/view/:id' element={<ProductsView />} />
          <Route path='/products/edit/:id' element={<ProductsEdit />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
