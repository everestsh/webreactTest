import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";


import "./styles.scss";

const useLocalStorage = (key, initialvalue) => {
  const [storedValue, setStoredValue] = useState( () => {
    return false;
  });
  return [storedValue, setStoredValue]
}

// const useLocalStorage = (key, initialvalue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialvalue;
//   });

//   const setValue = (value) => {
//       setStoredValue(value);
//       localStorage.setItem(key, JSON.stringify(value));
//   }
  
//   return [storedValue, setValue];
// }

const useDarkMode = () => {
  const [storedValue, setValue] = useState('darkMode')
  console.log(storedValue)
  // const [storedValue, setValue] = useLocalStorage('darkMode')
  return[storedValue, setValue];
}


const App = () => {
  const [coinData, setCoinData] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false);

  // const [storedValue, setValue] = useLocalStorage('darkMode')

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
