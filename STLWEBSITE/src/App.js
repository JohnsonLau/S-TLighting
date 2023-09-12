import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/Faq';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Casestudy from './pages/Casestudy';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar/>
      <Home/>
      <About/>
      <FAQ/>
      <Contact/>
      <Products/>
      <Clients/>
      <Testimonials/>
      <Casestudy/>

    </main>
  );
}

export default App;
