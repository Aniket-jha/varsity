
import Banner from "./Components/Banner";
import Navbar, { NavbarTwo } from "./Components/Navbar";
import Featured from "./Components/Featured"
import Rooms from "./Components/Rooms"
import WhatSection from "./Components/WhatSection";
import Location from "./Components/Location";
import ImageSection from "./Components/ImageSection";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ReactGA from 'react-ga';
import BottomNavConstant from "./Components/BottomFixed";
import Details from "./Components/Details";
import Event from "./Components/Event";

const TRACKING_ID = "G-FETKP1ZM5H";

  ReactGA.initialize(TRACKING_ID)

function App() {
  
  
  return (
    <div className="App">
        <NavbarTwo />
        <div className="pt-[80px]" >
        <Banner />
        <Details />
        <BottomNavConstant />
        <Featured />
        <Rooms />
        <WhatSection />
       
        <Location />
        <Event />
        <Testimonial />
        <Footer />
        </div>
    </div>
  );
}

export default App;
