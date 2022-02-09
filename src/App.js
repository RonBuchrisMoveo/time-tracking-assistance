import React, { useEffect, useState } from "react";
import store from './store'
import "./App.css";
import { Main } from "./cmps/Main";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
// import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"
import mondaySdk from "monday-sdk-js";
import { Provider } from "react-redux";
const monday = mondaySdk();


export const App=()=> {


  return (
    <Provider store={store}>
    <div className="App">
      <Main/>
    </div>
    </Provider>
  )
}

// export default App;
