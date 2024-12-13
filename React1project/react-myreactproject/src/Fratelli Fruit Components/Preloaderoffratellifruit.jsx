import React, { useEffect, useState } from 'react';
import preload from '../FratelliFruitImages/loader.png'; 
import "../Fratelli Fruit Components/NewcssFF.css";

const Preloaderoffratellifruit = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="preloader-container">
        <img src={preload}  />
      </div>
    );
  }

  return null; 
};

export default Preloaderoffratellifruit;
