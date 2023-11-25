import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-screen h-screen bg-rich-black-900 flex flex-col">
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
