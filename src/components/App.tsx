import { Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage'
import { CategoriesPage } from './CategoriesPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/:type" element={ <CategoriesPage /> } />
    </Routes>
  );
}