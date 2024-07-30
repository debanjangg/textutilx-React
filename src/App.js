import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About';
import React, {useState} from "react";

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme("dark")
      document.body.style.backgroundColor = "#183155"
    }else{
      setTheme("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
    <Navbar title="TextUtilX" aboutText="About" theme={theme} toggleTheme={toggleTheme}/>
    <div className="container my-5">
      <TextForm heading="Text area:" theme={theme} toggleTheme={toggleTheme}/>
      {/* {<About/>} */}
    </div>
    </>
  );
}

export default App;
