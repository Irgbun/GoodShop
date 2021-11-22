import { Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> } />
    </Routes>
  );
}