import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Add from './Add';
import { Find } from "./Find";
import { FindAll } from './FindAll';
import { Delete } from "./Delete";
import { Update } from "./Update";
import './App.css'; // Make sure this line is added

function App(){
    return(
        <div className="app-container">
            <h2 className="app-title">Employee Management</h2> 
            <nav className="navbar">
                <NavLink to="/Add" className="nav-link">Add</NavLink>
                <NavLink to="/Update" className="nav-link">Update</NavLink>
                <NavLink to="/Delete" className="nav-link">Delete</NavLink>
                <NavLink to="/Find" className="nav-link">Find</NavLink>
                <NavLink to="/FindAll" className="nav-link">FindAll</NavLink>
            </nav>

            <div className="content">
                <Routes>
                    <Route path="/Add" element={<Add />} />
                    <Route path="/Update" element={<Update />} />
                    <Route path="/Delete" element={<Delete />} />
                    <Route path="/Find" element={<Find />} />
                    <Route path="/FindAll" element={<FindAll />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
