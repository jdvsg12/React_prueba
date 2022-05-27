import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../src/components/Header.jsx'
import Main from '../src/components/Main.jsx'
import Footer from '../src/components/Footer.jsx'
import './index.css';


const App = () => {
  
  return(
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<App />)