import { Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage'
import { CategoriesPage } from './CategoriesPage'
import { ProductsPage } from './ProductsPage'
import { Footer } from './Footer'
import { Header } from './Header'
import 'antd/dist/antd.css';


export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/product/:type/:id" element={ <ProductsPage /> } />
        <Route path="/categories/:type" element={ <CategoriesPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}