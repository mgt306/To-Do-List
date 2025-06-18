import './App.css';
import Home from './pages/Home/Home';
import Todos from './pages/Todos/todos';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/todos' element={<Todos/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
