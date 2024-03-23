import "./App.css";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Start_protection from "./components/start_protection";
import Start from "./components/start";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
function App() {

  return (
    <>
      <BrowserRouter>
      
    
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route element={<Start_protection />}>
            <Route element={<Start />} path="/start"></Route>
            <Route element={<Home/>} path="/Home"></Route>
          </Route>
            <Route element={<Notfound/>} path="/*"></Route>
        </Routes>
  
      </BrowserRouter>
     
    </>
  );
}

export default App;
