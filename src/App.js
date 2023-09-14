import React, { useState } from "react";
import axios from "axios";

function App() {
  let [code, setcode] = useState('');
  let [patrimonio, setpatrimonio] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api',{
        code,
        patrimonio
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        Code:
        <input type="text" name="code" onChange={(e)=> setcode(e.target.value)}></input>
      </div>
      <div>
        patrimonio:
        <input type="text" name="patrimonio" onChange={(e)=> setpatrimonio(e.target.value)}></input>
      </div>
      <input type="submit"></input>
    </form>
  );
}



export default App;
