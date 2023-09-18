import React from "react";
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";


import Form from "./components/Form";
import BarcodeScanner from "./components/BarcodeScanner";

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/React_consumindoApi" element={ <Form/> } />
        <Route path="/BarcodeScanner" caseSensitive={false} element={ <BarcodeScanner/> } />
      </Routes>
    </div>
  )
}

export default App;