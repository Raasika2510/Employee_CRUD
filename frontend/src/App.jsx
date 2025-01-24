import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateEmp from './UpdateEmp';
import Employees from './Employees';
import CreateEmp from './CreateEmp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees />}></Route>
          <Route path='/create' element={<CreateEmp />}></Route>
          <Route path='/update/:id' element={<UpdateEmp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
