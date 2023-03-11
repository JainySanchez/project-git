import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter(){
    const { totalTodos, completTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter"> Completaste { completTodos } de {totalTodos} Todos </h2>
    )
}

export {TodoCounter};