import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import Home from './components/Home/Home';
//3 ta ba 4 ta kaaj. 1 categoryContect naame context pathabo ,built in react er method call korba //context create korsi
//2. provider ke parent a pthate hobe. pura area ta ke context er moddhe raksi
//value taake amta jekono jaiga theke access korte pari

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value = {[category, setCategory]}>
      <p>This is app.js Count: {category}</p>
      <Header></Header>
      <Home />
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
