import React, { Component } from 'react';
import { images } from './AccesoriesHomepage';
import {useParams} from "react-router-dom";
import './Productdetails.css'

export default function Productdetails(){
  const {id} = useParams();
  const product = images.find(pd =>pd.id==id);
  return(
    <div className="product-detail">
        <div className="image-gallery">
          <img src={product.src} alt={product.title} className="main-image" />
          
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>₹ {product.discountprice} <span className="original-price">₹ {product.price}</span></h2>
          <p className="discount">-{product.discount}%</p>
          <p>Inclusive of all taxes</p>
          <p>{product.emi}</p>
          <button className="buy-now">Add to cart </button>
        </div>
      </div>
  )
}