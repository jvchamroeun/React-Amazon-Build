import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Login from './pages/login'
import Header from './components/header'
import Payment from './pages/payment'
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MPaZYK9hdeR8AbJpDr3BWUhyg6zVgyJrnl96HP2F34wt0DsBXI9komKbErVxQnOZc4qGZIr2jA8VmnJVTldOuau002cEnzHLm');

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
                <Route path="/orders" element={
                    <>
                        <Header/>
                        <Home/>
                    </>
                } />
                <Route path="/payment" element={
                    <>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
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