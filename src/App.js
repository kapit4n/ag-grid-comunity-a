import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import './App.css';

const carMappings = [
  { key: 'tyt', value: 'Toyota' },
  { key: 'frd', value: 'Ford' },
  { key: 'prs', value: 'Porsche' },
  { key: 'nss', value: 'Nissan' },
];


// extract
function extractValues(mappings) {
  return mappings.map(x => x.key);
}

function lookupValue(mappings, key) {
  return mappings.find(x => x.key === key).value;
}

function lookupKey(mappings, name) {
  return mappings.find(x => x.value === name).key;
}

function App() {



  const [columnDefs] = React.useState([
    {
      headerName: "Make", field: "make", cellEditor: 'select',
      cellEditorParams: {
        values: extractValues(carMappings),
      },
      editable: true,
      filterParams: {
        valueFormatter: function (params) {
          return lookupValue(carMappings, params.value);
        },
      },
      valueFormatter: function (params) {
        return lookupValue(carMappings, params.value);
      },
      valueParser: function (params) {
        return lookupKey(carMappings, params.newValue);
      },
    },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }]);

  const [rowData] = React.useState([
    { make: "frd", model: "Celica", price: 35000 },
    { make: "frd", model: "Mondeo", price: 32000 },
    { make: "prs", model: "Boxter", price: 72000 }]);

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
