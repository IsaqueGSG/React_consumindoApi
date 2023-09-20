// import React from "react";
// import { useLocation } from 'react-router-dom';
// import Scanner from "./Scanner";

// function BarcodeScanner() {
//   const location = useLocation();
//   const tipo = new URLSearchParams(location.search).get('tipo');

//   return (
//     <div className="BarcodeScanner">
//       <Scanner tipo={tipo} />
//     </div>
//   );
// }
// export default BarcodeScanner;

import React, { Component } from 'react'
import Scanner from './Scanner'
import {Fab, TextareaAutosize, Paper} from '@mui/material'
import { Link } from "react-router-dom";

class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div>
        <Link to="/">
            <Fab style={{marginRight:10}} color="secondary">
                BACK
            </Fab>
        </Link>
        <span>Barcode Scanner</span>
        
        <Paper variant="outlined" style={{marginTop:30, width:640, height:320}}>
          <Scanner onDetected={this._onDetected} />
        </Paper>

        <TextareaAutosize
            style={{fontSize:32, width:320, height:100, marginTop:30}}
            rowsMax={4}
            defaultValue={'No data scanned'}
            value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />

      </div>
    )
  }
}

export default BarcodeScanner
