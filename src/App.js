import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import './App.css';

function App() {

  const [columnDefs] = React.useState([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }]);

  const [rowData] = React.useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }]);

  return (
    <div className="App">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        modules={AllCommunityModules}>
      </AgGridReact>
    </div>
  );
}

export default App;
