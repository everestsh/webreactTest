
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Todo</h1>
//     </div>
//   );
// }

// export default App;


import { useReducer, useState } from "react";
import reducer, { initialState } from "./reducers";
import { toggleItem, addItem } from "./actions";

// import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleItemClick = (e) => {
    dispatch(toggleItem(e.target.dataset.itemid));
  };

  const handleClick = (e) => {
    dispatch(addItem(input));
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Todo Application</h1>

      <ul>
        {state.todos.map((item) => {
          return (
            <li onClick={handleItemClick} data-itemId={item.id} key={item.id}>
              {item.title} {item.done && <span>- Done</span>}
            </li>
          );
        })}
      </ul>

      <div>
        <input value={input} onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  );
}
