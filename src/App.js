import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from './project/User';
import Commends from './project/Commends';
import Navlink from './project/Navlink';
import { Ground } from './project/Context';
import { useState } from 'react';
function App() {
  const[user,setUser]=useState([])
  const[center,setCenter]=useState([])
  const[add,setAdd]=useState("")

  const fetchcall=(page)=>{
    fetch(`https://jsonplaceholder.typicode.com/${page}`)
      .then(a => a.json())
      .then(arr => {
        if (page === "users") {
           setUser(arr) 
          } else {
          setCenter(arr)
        }

      })
  }
  return (
    <Ground.Provider value={{fetchcall,user,center,add,setAdd}}>
    <div className="App">
      <>
       <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Navlink/>}/>
      <Route path='/user' element={<User/>} />
      <Route path='/commend' element={<Commends/>}/>
    </Routes>
   </BrowserRouter>
   </>
    </div>
    </Ground.Provider>
  );
}

export default App;
