import React from 'react';
import './App.css';
import Header from './Containers/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Containers/Banner/Banner';
import Home from './Containers/Home/Home';
import Footer from './Containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
