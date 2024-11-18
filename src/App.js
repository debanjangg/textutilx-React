import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, {useState} from "react";

function App() {

    const [theme, setTheme] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type: type, msg: message });
        setTimeout(()=>{ setAlert(null); }, 1500)
    }

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            document.body.style.backgroundColor = "#183155";
            showAlert("success","Dark Mode has been enabled.");
            document.title = "TextUtilX - Dark Home";
        }else{
            setTheme("light")
            document.body.style.backgroundColor = "white"
            showAlert("success","Light Mode has been enabled.");
            document.title = "TextUtilX - Light Home";
        }
    }

    return (
            <>
            {/* <Router> */}
            <Navbar title="TextUtilX" aboutText="About" theme={theme} toggleTheme={toggleTheme}/>
            <Alert alert={alert}/>
            <div className="container my-5">
                {/* <Routes> */}
                    {/** exact keyword is used to enforce strict matching, otherwise react uses partial matching */}
                    {/* <Route exact path="/" element={<TextForm heading="Text area:" theme={theme} toggleTheme={toggleTheme} showAlert={showAlert}/>}/> */}
                    <TextForm heading="Text area:" theme={theme} toggleTheme={toggleTheme}
                    showAlert={showAlert}/>
                    {/* <Route exact path="/about" element={<About/>} /> */}
                {/* </Routes> */}
            </div>
            {/* </Router> */}
        </>
    );
}

export default App;
