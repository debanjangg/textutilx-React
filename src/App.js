import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import About from './components/About';

import React, {useState} from "react";

function App() {

  const [theme, setTheme] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({ type: type, msg: message });
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme("dark");
      document.body.style.backgroundColor = "#183155";
      showAlert("success","Dark Mode has been enabled.");
    }else{
      setTheme("light")
      document.body.style.backgroundColor = "white"
      showAlert("success","Light Mode has been enabled.");
    }
  }

  return (
    <>
    <Navbar title="TextUtilX" aboutText="About" theme={theme} toggleTheme={toggleTheme}/>
    <Alert alert={alert}/>
    <div className="container my-5">
      <TextForm heading="Text area:" theme={theme} toggleTheme={toggleTheme} showAlert={showAlert}/>
      {/* {<About/>} */}
    </div>
    </>
  );
}

export default App;
