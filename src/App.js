import { createContext, useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const QualitiesQuantity = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <QualitiesQuantity.Provider value={[count,setCount]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </QualitiesQuantity.Provider>
  );
}

export default App;
