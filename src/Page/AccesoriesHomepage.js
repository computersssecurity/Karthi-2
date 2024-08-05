import React from 'react';
import './AccesoriesHomepage.css';
import { useNavigate } from 'react-router-dom';

// Unified Card component
const Card = ({  image, url, onClick }) => {
  
  return (
    <div className="card" onClick={onClick}>
      <img src={image.src} alt={image.title} />
      <div className="card-title">{image.title}</div>
    </div>
  );
};

export const images = [
  { id: '1', src: 'assets/royal.jpeg', title: 'RoyalEnfield Helmet' ,description:"Royal Enfield Open Face MLG helmet |Made Like a Gun | with Clear Visor | Impact Protection | High Density EPS | ISI and DOT certified | Micrometric lock | MATT BLACK L ", price:"1,950",discountprice:"1,833",discount:"13",emi:"EMI starts at ₹90. No Cost EMI available"},
  { id: '2', src: 'assets/agv.jpeg', title: 'AGV Helmet',description:"PISTA GP RR MONO RED CARBON - MOTORBIKE FULL FACE HELMET E2206 DOT",price:" 138,710.03",discountprice:" 80,000 Inclusive of all taxes",discount:"40",emi:"EMI starts at  5000. " },
  { id: '3', src: 'assets/Studds-1.jpeg', title: 'STUDDS Helmet',description:"Studds Thunder D8 Matt Black N4 Grey With Mirror Visor (600MM) XL",price:" 1,985",discountprice:" 1,890 Inclusive of all taxes",discount:"5",emi:"EMI starts at  145. No Cost EMI available."},
  { id: '4', src: 'assets/Axor.jpeg', title: 'AXOR Helmet',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:" 5999",discountprice:" 2999 Inclusive of all taxes",discount:"50",emi:"EMI starts at  145. No Cost EMI available."},
  { id: '5', src: 'assets/smk white.jpg', title: 'SMK Helmet',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:"₹ 5999",discountprice:"₹ 2999 Inclusive of all taxes",discount:"%50",emi:"EMI starts at ₹ 145. No Cost EMI available." },
  { id: '6', src: 'assets/vega.jpeg', title: 'VEGA Helmet',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:"₹ 5999",discountprice:"₹ 2999 Inclusive of all taxes",discount:"%50",emi:"EMI starts at ₹ 145. No Cost EMI available."},
  { id: '7', src: 'assets/Jackets.jpeg', title: 'Riding Jacket',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:"₹ 5999",discountprice:"₹ 2999 Inclusive of all taxes",discount:"%50",emi:"EMI starts at ₹ 145. No Cost EMI available."},
  { id: '8', src: 'assets/Gloves.jpeg', title: 'Riding Glove',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:"₹ 5999",discountprice:"₹ 2999 Inclusive of all taxes",discount:"%50",emi:"EMI starts at ₹ 145. No Cost EMI available."},
  { id: '9', src: 'assets/Boot.jpeg', title: 'Riding Boot',description:"Axor Apex Venomous DOT Certified Full Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Black Neon Green(M)",price:"₹ 5999",discountprice:"₹ 2999 Inclusive of all taxes",discount:"%50",emi:"EMI starts at ₹ 145. No Cost EMI available." },
];
const AccesoriesHomepage = () => {
  
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/product/${id}`)
    
  };

  return (
    <div className="card-grid">
      {images.map((image) => (
        <Card
          key={image.id}
          image={image}
          onClick={() => handleCardClick(image.id)} // Handle click for cards without URL
          url={image.url} // Pass URL for cards that should open a link
        />
      ))}
    </div>
  );
};

export default AccesoriesHomepage;
