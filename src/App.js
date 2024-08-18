// import About from "./components/about/About";
// import Header from "./components/header/Header";
// import Home from "./components/home/Home";
// import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import { Routers } from "./components/routes/Routers";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//       </Routes>
//     </BrowserRouter>
//   )}

// export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routers from "./components/routes/Routers";  


function App() {
  return (
    <RouterProvider router={Routers} />
  );
}

export default App;

        

