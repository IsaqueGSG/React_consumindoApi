import React, { useState, useEffect } from "react";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {
  Table,TableBody ,TableCell ,TableContainer,TableRow ,Paper, Button ,CssBaseline
} from '@mui/material'

function Consulta() {
  let [values, setValues] = useState([]);
  
  async function getData(){
    try{
      const response = await axios.get('http://localhost:3001/');
      const dataValues = await response.data.values
      setValues( dataValues );
      toast.success('OK')
    }catch(e){
      toast.error('algo deu errado')
    }
  }

  useEffect( ()=>{
    getData()
  },[])

function syncData(){
  for(let i =0 ; i<1; i++ ) getData()
}

  return (
    <>
    {/* {values.map((row)=><div key={row}>{row}</div>)} */}
    
    <CssBaseline />
    <TableContainer component={Paper}>
      <Table aria-label="simple table">

        <TableBody>
          {values.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}
            >
              <TableCell align="center">{row[0]}</TableCell>
              <TableCell align="center">{row[1]}</TableCell>
              <TableCell align="center">{row[2]}</TableCell>
              <TableCell align="center">{row[3] ? row[3].split(' ')[0] : null }</TableCell>
              <TableCell align="center">{row[4]}</TableCell>

              { window.innerWidth > 800 ? <TableCell align="center">{row[5]}</TableCell> : null }
              { window.innerWidth > 800 ? <TableCell align="center">{row[6]}</TableCell> : null }

              <TableCell align="center">{row[7]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={syncData}>Sync Table</Button>
    </>
  );  
}



export default Consulta;