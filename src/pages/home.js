import React, { Component } from 'react';
import './home.css'
import Product from "../components/product"

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className='home_container'>
                    <img 
                        className='home_image'
                        src='https://as2.ftcdn.net/v2/jpg/03/45/73/61/1000_F_345736111_up8XDxSYwaoOfSC88vQTPTpA3QhI3OSn.jpg'
                        />

                    <div className='home_row'>
                        <Product
                            id={23123441}
                            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum."
                            price={29.99}
                            image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
                            ratings={5}
                        />
                        <Product/>
                    </div>

                    <div className='home_row'>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>

                    <div className='home_row'>
                        <Product/>
                    </div>
                </div>
            </div>
        );
    };
};