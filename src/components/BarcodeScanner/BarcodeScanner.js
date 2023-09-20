import React, { useState } from 'react'
import Scanner from './Scanner'
import { Container, Fab, Grid, Paper } from '@mui/material'
import { Link, useLocation , useNavigate } from "react-router-dom";
import { Quagga } from 'quagga';

function BarcodeScanner(){
  const [results, setResults] = useState('');
  
  const location = useLocation();
  const tipo = new URLSearchParams(location.search).get('tipo');

  const _onDetected = result => {
    setResults({ results: [] })
    setResults({ results: results + result })
    localStorage.setItem(tipo, result.codeResult.code)
    Quagga.stop();
    useNavigate('/React_consumindoApi')
  }

  return (
    <Container sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Grid>
          <Link to="/React_consumindoApi">
              <Fab style={{marginRight:10}} color="secondary">
                  BACK
              </Fab>
          </Link>
          <span>Barcode Scanner</span>

          <Paper variant="outlined" style={{marginTop:30, width:640, height:320}}>
            <Scanner onDetected={_onDetected} />
          </Paper>
          </Grid>
    </Container>
  )
}
export default BarcodeScanner
