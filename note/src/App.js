import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TaskProvider} from './Context/Taskcontext';
import Login from './Component/login.js';
import Task from './Component/Task.js';
import Note from './Component/Note.js';
import Card from './Component/Cards.js';
import SignUp from './Component/SignUp.js';
import Loginrr from './Component/Loginrr.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
  },
  {
    path:'/addtask',
    element:<Card/>,
  },
  
  {
    path:'/note',
    element:<Note/>,
  },
  
  {
    path:'/Loginrr',
    element:<Loginrr/>,
  },
  {
    path:'/SignUp',
    element:<SignUp/>,
  },
  
]);
const App  = ()=> {
  return (
    <TaskProvider>
      <RouterProvider router={router}/>
      </TaskProvider>
    )

}
export default App;