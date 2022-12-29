
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Sse from './components/pages/Sse';
import Webwork from './components/pages/Webwork';
import Geoloc from './components/pages/Geoloc';
import Dragndrop from './components/pages/Dragndrop';
import Employee from './components/pages/Employee';

function App() {
  return (
    <div className="App">
       <Navbar/>   
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="sse" element={ <Sse/> } />
        <Route path="webwork" element={ <Webwork/> } />
        <Route path="dragndrop" element={ <Dragndrop/> } />
        <Route path="geoloc" element={ <Geoloc/> } />
         <Route path="employee" element={<Employee/>} />
      </Routes>  
    </div>
  );
}

export default App;
