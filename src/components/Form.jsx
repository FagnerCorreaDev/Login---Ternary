import React from "react";
import Input from "./Input";

function Form() {
  return (
    <div className="container-form">
      <form>
        <div className="inputs">
          <Input
            type="text"
            placeholder="Usuário"
          />
          <Input
            type="password"
            placeholder="Password"
          />
        </div>

        <button type="submit"> Login </button>

      </form>
    </div>

  )
}
export default Form;