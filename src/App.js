import React from 'react';
import { Article, Brand, CTA, Feature, Navbar} from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className='app'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
       </div>
    </div>
  )
};

export default App;