
import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Nav'

import { InputField} from './components/InputField'
import { useState } from 'react'
import { HomePage } from './pages/homePage'
import { EstelleSida } from './pages/estelle'
import { AntonSida } from './pages/anton'
import { SimonSida } from './pages/simon'
import React from 'react'



export const ESTELLE_PAGE = "estelle";
export const SIMON_PAGE = "simon";
export const ANTON_PAGE = "anton";
export const HOME_PAGE = "homepage";

function App() {


  const [page, setPage] = useState(HOME_PAGE);

  const changePage = (page) => {
    setPage(page);
  };

  let content = <div>404 Not Found</div>;

if (page === HOME_PAGE) {

  content =(
    <HomePage changePage={changePage} />
  );
} else if (page === ESTELLE_PAGE) {
  content = (
    <EstelleSida changePage={changePage} />
  );
} else if (page === ANTON_PAGE) {
  content = (
    <AntonSida changePage={changePage} />
  );
} else if (page === SIMON_PAGE) {
  content = (
    <SimonSida changePage={changePage} />
  );
}


  return (
    <>

      <div id="app">
        <Navbar changePage={changePage} />
        <main>{content}</main>
      </div>
        <Footer />

    </>
  );

}

export default App;
