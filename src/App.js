import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';
import BenifitsSection from './components/BenifitsSection';
import WhitePapperSection from './components/WhitePapperSection';
import RoadMap from './components/RoadMap';
import TimerSection from './components/TimerSection';
import TekonomicsSection from './components/TekonomicsSection';
import PartnershipSection from './components/PartnershipSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useState, useEffect } from "react";
import Backtotop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1500,
        disable: 'mobile',
      }
    );
  })
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          <div className='hero-bg-img '>
            <div className='max-lg:bg-[url(./assets/images/hero-bg-img.png)] max-lg:bg-size'>
              <Navbar />
              <HeroSection />
            </div>
            <SecondSection />
          </div>
          <BenifitsSection />
          <WhitePapperSection />
          <RoadMap />
          <TimerSection />
          <TekonomicsSection />
          <PartnershipSection />
          <Footer />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
