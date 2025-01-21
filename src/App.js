import Navigation from "./Components/Navigation";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./Components/page/Home";
import Member from "./Components/page/Member";
import Dashboard from "./Components/page/Dashboard";
import MyChart from "./Components/page/MyChart";

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/member' element={<Member/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/mychart' element={<MyChart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
