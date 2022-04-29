import React from "react";
import {NavBar} from "../../Components/NavBar/NavBar";
import {Footer} from "../../Components/Footer/Footer";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";

export class Layout extends React.Component
{
    render()
    {
        return <div className="App">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>;
    }
}