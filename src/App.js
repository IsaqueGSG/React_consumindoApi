import React from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form/Form";
import Consulta from "./components/Consulta/Consulta";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/React_consumindoApi" element={ <Form/> } />
        <Route path="/BarcodeScanner" element={ <BarcodeScanner/> } />
        <Route path="/Consulta" element={ <Consulta/> } />
      </Routes>
    </div>
  )
}

export default App;