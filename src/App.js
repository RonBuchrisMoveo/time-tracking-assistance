import React, { useEffect, useState } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"
import { Main } from "./cmps/Main";

const monday = mondaySdk();

export const App=()=> {
const [meta, setMeta] = useState({});
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxNTIwNiwidWlkIjoyNjUwNjUxMSwiaWFkIjoiMjAyMi0wMi0wNlQxMzoxODoxMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.hBfGTpbOc86DGGbGcmmMD9gIg1P90Y8gvpgIGseWn5E')

useEffect(() => {
  monday.get("context").then((res) => {
    setMeta(res.data);
  });
}, []);

  return (
    <div className="App">
      <Main monday={monday} meta={meta}/>
    </div>
  )
}

// export default App;
