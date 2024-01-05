import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Create from './Component/Create';
import Header from './Component/Header';
import Update from './Component/Update';
import ShowData from './Component/ShowData';
import Homepage from './Component/Homepage';

function App() {
  const [updateValue, setUpdateValue] = useState('');

  function handleDataFromChild(id){
    setUpdateValue(id);
  }


  return (
    <>
      <Header/>
      {/* <Homepage/> */}
        <Routes>
          <Route path='/crud-react' element={<Homepage/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path={`/update/${updateValue}`} element={<Update updateid={updateValue}/>}/>
          <Route path='/show-data' element={<ShowData sendDataToParent={handleDataFromChild}/>}/>
        </Routes>
    </>
  );
}

export default App;
