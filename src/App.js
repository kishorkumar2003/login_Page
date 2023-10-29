import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path="/register" element={<RegisterPage/>}/>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/" element={<h1>home</h1>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
