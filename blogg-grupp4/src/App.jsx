
import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Nav'
import { InputField } from './components/InputField'
import React from 'react'



function App() {
  return (
    <>

      <div>
        <Navbar />
        <Hero />
        <InputField />
      </div>
      <Footer />

    </>
  );
}

export default App;
