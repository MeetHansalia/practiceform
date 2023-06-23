
// import Input from "./components/userinfo/input";
import "./App.css";
import React, { useState } from "react";
import BasicForm from './Formik/BasicForm';
import AdvancedForm from './Formik/AdvancedForm';





function App() {
  const[view, setView]=useState("basic") 
  return (
    <div className="App">
      <nav>
        <h3 onClick={()=>setView("basic")} style={{color: view === "basic" ? "#fff" : ""}}>
          Basic
        </h3>
        <h3 onClick={()=> setView("advanced")} style={{color: view === "advanced" ? "#fff":""}}>
          Advanced
        </h3>        
      </nav>  
      {view === "basic" ? <BasicForm/> : <AdvancedForm/> }    
    </div>
  );
}

export default App;
