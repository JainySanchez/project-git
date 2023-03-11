//import './App.css';
import React from "react";
import {TodoProvider} from '../Components/TodoContext'
import { AppUi } from "./AppUi";

// const defaulTodos=[
//   {text:'Despertarse a las 6:00', completed:true},
//   {text:'Clases de Ingles', completed:true},
//   {text:'Hacer Ejercicios', completed:false},
//   { text: 'Ingresar al Daily', completed: false },
//   {text:'Avanzar el curso de React', completed:false},
// ];
function App() { 

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
