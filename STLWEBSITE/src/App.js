import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages//about/About';
import Testimonials from './pages/testimonials/Testimonials';
import FAQ from './pages/faq/Faq';
import Products from './pages/products/Products';
import Clients from './pages/clients/Clients';
import Casestudy from './pages/casestudy/Casestudy';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <FAQ/>
      <Products/>
      <Testimonials/>
      <Clients/>
      <Casestudy/>
      <Footer/>
      </div>
  );
}

export default App;
