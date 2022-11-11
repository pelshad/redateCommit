import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggle } from "./redux/todos";

const TodoItem = ({todo, onToggleHandler}) => {
  return (
    <div>
      <input type="checkbox"
      onClick={()=>onToggleHandler()}
      checked={todo.done}
      readOnly={true} />
      
    </div>
  )
}

function App() {
  
  return (  

  );
}

export default App;