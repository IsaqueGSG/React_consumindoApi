import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import Scanner from "./Scanner";

function BarcodeScanner() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipo = queryParams.get('tipo');

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="BarcodeScanner">
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner tipo={tipo} onDetected={onDetected} />}
      </div>
    </div>
  );
}

export default BarcodeScanner;