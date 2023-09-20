import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';

function Teste() {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    setResult(data);
  }

  return (
    <div>
      <BarcodeReader onScan={handleScan} />
      <p>{result}</p>
    </div>
  );
}

export default Teste;
