import React from 'react';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/login"
import Register from "./components/register"
import Todo from "./components/todo"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>} ></Route>
    <Route path='/todo' element={<Todo/>} ></Route>

    </Routes>
    </BrowserRouter>   
    </div>
  );
}

export default App;
