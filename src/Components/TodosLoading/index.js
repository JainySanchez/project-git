import React from 'react';
import './TodosLoading.css'

function TodosLoading(){
    // return <p>Ups! Loading...</p>
    <div className='LoadingTodo-container' >
        <span className='LoadingTodo-completeIcon' >
        </span>
        <p className='LoadingTodo-text' >
            Cargando TO - DO
        </p>
        <span className='LoadingTodo-deleteIcon'>
        </span>
    </div>
}

export {TodosLoading}