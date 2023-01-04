import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Login from './pages/login'
import Header from './components/header'
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log(' THE USER IS >>> ', authUser)

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

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