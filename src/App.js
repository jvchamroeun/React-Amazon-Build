import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Login from './pages/login'
import Header from './components/header'

function App() {
    return (
        <div>
            <Routes>
            <Route path="/login" element={
                    <>
                        <Login />
                    </>
                } />
                <Route path="/checkout" element={
                    <>
                        <Header/>
                        <Checkout/>
                    </>
                } />
                <Route path="/" element={
                    <>
                        <Header/>
                        <Home/>
                    </>
                } />
            </Routes>
        </div>
        
    );
}

export default App;