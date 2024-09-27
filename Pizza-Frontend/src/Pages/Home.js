import React from 'react';
import '../CSS/Home.css'; 
// import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';

const Home = () => {
  const items = [
    { id: 1, src: image1, alt: 'Image 1', category: 'Tomato Pizza', price: '$10' },
    { id: 2, src: image2, alt: 'Image 2', category: 'Paneer-Pizza', price: '$12' },
    { id: 3, src: image3, alt: 'Image 3', category: 'Chilli Pizza', price: '$15' },
    { id: 4, src: image4, alt: 'Image 4', category: 'Sandwich Pizza', price: '$8' },
    { id: 5, src: image5, alt: 'Image 5', category: 'Chicken Pizza', price: '$11' }
  ];

  return (
    <div id="Home">
      {/* Add banner image */}
      <div id="banner-container">
        <img src={banner2} alt="Ban" id="banner" />
      </div>
      <div className='top_deals'>
      <h2 id="top_deals">TOP DEALS</h2>
      </div>
     
      <div id="features">
      
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {items.map((item) => (
              <div key={item.id} className="swiper-slide">
                <div className="image-container">
                  <img src={item.src} alt={item.alt} className="pizza-image" />
                  <div className="overlay">
                    {/* Display the category */}
                    <p className="category">{item.category}</p>
                    {/* Display the price */}
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
        </div>
      </div>
      <div className='down_button'>
      <button id="down_button">View all</button>
      </div>
    </div>
  );
};

export default Home;
