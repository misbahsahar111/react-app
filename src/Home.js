import React from 'react';
import styles from "./Home.css"
import Background from './Background';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import image2 from './assets/logo.png';

const Home =() => {
    const myStyle={
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/image2.jpg"})`,
                height:'100vh',
                marginTop:'-80px',
                fontSize:'50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity:'0.2',
                };
  return (
    <div className="Home">
        <Navbar/>
      <div class={styles.container}>
      <Background/>
      <div className="align text">
    <h4 className='d-flex justify-content-between'>Nature</h4>
    <p className='d-flex justify-content-between'>What a beautiful sunrise</p>
    <button type="button" class="btn btn-primary d-flex justify-content-between" onClick="document.getElementById('middle').scrollIntoView();">Buy Now</button>

  </div>

      
</div>
<Card/>




  </div>
   
  );
};

export default Home;
