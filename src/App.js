import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="TextUtilX" aboutText="About"/>
    <div className="container my-5">
      <TextForm heading="Enter your text:"/>
      {/* {<About/>} */}
    </div>
    </>
  );
}

export default App;
