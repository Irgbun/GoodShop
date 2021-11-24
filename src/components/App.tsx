import { Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage'
import { CategoriesPage } from './CategoriesPage'
import { ProductsPage } from './ProductsPage'
import { Footer } from './Footer'
import './App.css'


export function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/:type/:id" element={ <ProductsPage /> } />
        <Route path="/:type" element={ <CategoriesPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}