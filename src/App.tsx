import React from 'react';
import {  Route, Routes } from "react-router-dom";
import TodoList from "./pages/Todolist/TodoList";
import NavBar from "./Components/Navabar/NavBar";
import styles from './App.module.css'
import About from "./pages/About/About";


const App = () => {

    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/todolist" element={<TodoList />} />
                <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
};

export default App;
