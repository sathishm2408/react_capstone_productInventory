import React, { Component } from 'react';
import product_img from '../assets/product.jpg'
import './productCards.css';

export default class ProductCards extends Component {
    render() {
        return (
                <div className="col-lg-3 col-md-4 col-xs-12 product">
                    <div className="card product">
                        <img className='card-img-top productimg' src={product_img} alt="products"></img>
                        <div className="card-body">
                            <h4 className='card-title'>{this.props.product.productName.toUpperCase()}</h4>
                            <div className='card-text'>{this.props.product.Description}</div>
                            <b className='card-text'>Rs.{this.props.product.price}</b>
                            <p>
                                <a href="/" className="btn btn-primary">See Profile</a>
                            </p>

                        </div>
                    </div>
                    </div>
        )
    }
}
