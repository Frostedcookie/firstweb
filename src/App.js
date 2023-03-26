import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
