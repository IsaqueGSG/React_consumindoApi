import React, { useState } from "react";
import axios from "axios";
import { 
  styled,
  Box, 
  TextField, 
  Button, 
  Grid, 
  Container,
  CssBaseline,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";

function Form(props) {
  let [Nserie, setNserie] = useState('');
  let [patrimonio, setpatrimonio] = useState('');
  let [local, setLocal] = useState('');
  let [inventariante, setInventariante] = useState('');
  let [obs, setObs] = useState('');
  let [statusBem, setStatusBem] = useState('');
  let [tipoBem, setTipoBem] = useState('');


  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/',{
        Nserie,
        patrimonio,
        local,
        inventariante,
        obs,
        statusBem,
        tipoBem
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
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            
                <FormControl sx={{ width: 1 }}>
                  <InputLabel id="labelInventariante">INVENTARIANTE</InputLabel>
                  <Select
                    labelId="labelInventariante"
                    label='labelInventariante'
                    id="inventariante"
                    value={inventariante}
                    onChange={(e)=> setInventariante(e.target.value)}
                  >
                    <MenuItem value={'isaque gabriel da silva goncalves'}>isaque</MenuItem>
                  <MenuItem value={'thais ...'}>Thais</MenuItem>
                  <MenuItem value={'gleidson juan ..'}>Juan</MenuItem>
                  </Select>
                </FormControl>
              
              </Grid>

              <Grid item xs={12} sm={6}>

                <FormControl sx={{ width: 1 }}>
                  <InputLabel id="labelLocal">LOCAL</InputLabel>
                  <Select
                    labelId="labelLocal"
                    label="labelLocal"
                    id="local"
                    value={local}
                    onChange={(e)=> setLocal(e.target.value)}
                  >
                  <MenuItem value={320}>Sala 320</MenuItem>
                  <MenuItem value={206}>Sala 206</MenuItem>
                  <MenuItem value={307}>Sala 307</MenuItem>
                  </Select>
                </FormControl>

              </Grid>

              <Grid item xs={12} sm={6}>

                <FormControl sx={{ width: 1 }}>
                  <InputLabel id="labelStatus">STATUS</InputLabel>
                  <Select
                    labelId="labelStatus"
                    label="labelStatus"
                    id="statusBem"
                    value={statusBem}
                    onChange={(e)=> setStatusBem(e.target.value)}
                  >
                   <MenuItem value={'ocioso'}>Ocioso</MenuItem>
                  <MenuItem value={'reparo'}>Necessita de reparo</MenuItem>
                  <MenuItem value={"Uso"}>Em uso</MenuItem>
                  </Select>
                </FormControl>

              </Grid>

              <Grid item xs={12} sm={6}>

                <FormControl sx={{ width: 1 }}>
                  <InputLabel id="labelTipo">TIPO</InputLabel>
                  <Select
                    labelId="labelTipo"
                    label="labelTipo"
                    id="tipo"
                    value={tipoBem}
                    onChange={(e)=> setTipoBem(e.target.value)}
                  >
                    <MenuItem value={'cadeira'}>Cadeira</MenuItem>
                  <MenuItem value={'cpu'}>Cpu</MenuItem>
                  <MenuItem value={"monitor"}>Monitor</MenuItem>
                  </Select>
                </FormControl>
              
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="patrimonio"
                  fullWidth
                  id="patrimonio"
                  label="Patrimonio"
                  autoFocus
                  value={ patrimonio || localStorage.getItem('patrimonio') }
                  onChange={(e)=> setpatrimonio(e.target.value)}
                  InputProps={{
                    endAdornment: 
                    <Link to='/BarcodeScanner?tipo=patrimonio'>
                        <Button variant="outlined" >
                        Ler
                        </Button>
                    </Link>
                  }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Nserie"
                  label="Numero de Serie"
                  name="Nserie"
                  value={ Nserie || localStorage.getItem('Nserie') } 
                  onChange={(e)=> setNserie(e.target.value)}
                  InputProps={{
                    endAdornment: 
                      <Link to='/BarcodeScanner?tipo=Nserie'>
                        <Button variant="outlined" >
                         Ler 
                        </Button>
                      </Link>
                    }
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="observacao"
                  fullWidth
                  id="observacao"
                  label="Observação"
                  autoFocus
                  value={obs}
                  onChange={(e)=> setObs(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <Button component="label" variant="contained" sx={{ width: 1 }}>
                  FOTO 1
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button component="label" variant="contained" sx={{ width: 1 }}>
                  FOTO 2
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button component="label" variant="contained" sx={{ width: 1 }}>
                  FOTO 3
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
              
        
              <Grid item xs={6}>
                <Button component="label" variant="contained" sx={{ width: 1 }}>
                  FOTO 4
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}



export default Form;