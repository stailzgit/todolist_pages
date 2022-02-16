import React from 'react';
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import  Logo  from '../../assets/logoTodolist.png';


const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Link to="/">
                <img src={Logo} width={30} alt="logo"/>
            </Link>

            <ul className={styles.NavList}>
                <li className={styles.NavItem} >
                    <Link to="/">About</Link>
                </li>
                <li className={styles.NavItem}>
                    <Link to="/todolist">Todolist</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
