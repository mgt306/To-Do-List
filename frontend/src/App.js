import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path = '/' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
