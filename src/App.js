import React from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form/Form";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/React_consumindoApi" element={ <Form/> } />
        <Route path="/BarcodeScanner" element={ <BarcodeScanner/> } />
      </Routes>
    </div>
  )
}

export default App;