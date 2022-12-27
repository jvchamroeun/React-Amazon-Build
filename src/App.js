import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Header from './components/header'

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/checkout" element={
                    <>
                        <Checkout/>
                    </>
                } />
                <Route path="/" element={
                    <>
                        <Home/>
                    </>
                } />
            </Routes>
        </div>
        
    );
}

export default App;