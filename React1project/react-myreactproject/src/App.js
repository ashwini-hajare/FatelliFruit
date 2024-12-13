import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Main from './Fratelli Fruit Components/Swiperslider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// import Registrationform from './Fratelli Fruit Components/Registrationform';

import Preloaderoffratellifruit from './Fratelli Fruit Components/Preloaderoffratellifruit';
import Navbar2 from './Fratelli Fruit Components/Navbar2';
import Home2 from './Fratelli Fruit Components/Home2';
import OurTeam from './Fratelli Fruit Components/OurTeam';
import Agronomy from './Fratelli Fruit Components/Agronomy';
import Activities from './Fratelli Fruit Components/Activities';
import Product from './Fratelli Fruit Components/Product';
import Visionmission from './Fratelli Fruit Components/Visionmission';
import Contactus from './Fratelli Fruit Components/Contactus';
import Lastfooter from './Fratelli Fruit Components/Lastfooter';



// import Map from './Fratelli Fruit Components/Map';

// import Swiperslider from './Fratelli Fruit Components/Swiperslider';


function App() {



  return (




    <div className="App">





{/* <Registrationform/> */}




      <Preloaderoffratellifruit/>
      

      {/* Fratelli Fruit  navbar*/}

      {/* <Navbar1/> */}
      
      <Navbar2 />

      {/* Fratelli Fruit  Main components  */}


      {/* <Home/> */}
      {/* <Home2/> */}

      {/* <OurTeam/> */}
      {/* <Agronomy/> */}

      {/* <Activities/> */}

      {/* <Product/> */}
      {/* <Visionmission/> */}
      {/* <Contactus/> */}

      {/* <Swiperslider/> */}


      {/* Fratelli Fruit Footer */}



       <BrowserRouter>

        <Routes>
          <Route path='HOME' element={<Home2 />} />
          <Route path='OURTEAM' element={<OurTeam />} />
          <Route path='AGRONOMY' element={<Agronomy />} />
          <Route path='ACTIVITY' element={<Activities />} />


          <Route path='PRODUCT' element={<Product />} />
          <Route path='VISIONMISSION' element={<Visionmission />} />
          <Route path='CONTACTUS' element={<Contactus />} />

        </Routes>
      </BrowserRouter> 

      <Lastfooter />  



   
   




      {/* <Main/> */}
    </div>
  );
}

export default App;
