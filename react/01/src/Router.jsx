import React from "react";
import  Home  from "./Home";
import About from "./About";
import Contact from "./Contact";
import  Navbar  from "./Navbar";
import Error from "./Error";
import { BrowserRouter,Route, Routes } from 'react-router-dom'



const Router = () => {
    return (
        <BrowserRouter>
     <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<login/>}></Route>
                <Route path="/Error" element={<Error/>}></Route>
        </Routes >
        </BrowserRouter >

    )
}
export default Router;