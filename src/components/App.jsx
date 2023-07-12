import React from 'react'
import data from "../../data/recipes.json";
import Menu from "./Menu";

export default function App() {
    return (
        <Menu recipes={ data }/>
    );
}