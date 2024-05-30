import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css';
import App from './App';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Resul } from './components/result/Resul';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element={<Home />} />
      <Route path='footer' element={<Footer />} />
      <Route path='navbar' element = {<Navbar/>}/>
      <Route path='result' element={<Resul/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

