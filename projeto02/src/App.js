import React from "react";
import  { createGlobalStyle } from "styled-components";
import Home from "./components/Home/Home";
import ProductCards from "./components/Cards/Cards";



const GobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
`
function App() {
  return (
    <div>
      <GobalStyle />
      <Home />
  
    </div>
  );
}

export default App;
