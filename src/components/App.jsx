import React from "react";
import Form from "./Form"

let estaLogado = true;

function App(){
  return(
    <div>
      {
          estaLogado === false? <Form/> : <h1 className="hello"> Hello </h1>
      }
    </div>
  )
}
export default App;