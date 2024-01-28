import "./App.scss";
import Dashboard_page from "./Components/Dashboard_page";
import Transfer_page from "./Components/Transfer_page";
import History from "./Components/History";
import {Route, Routes} from 'react-router-dom'
import Auth_page from "./Components/Auth_page";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/transfer" element={<Transfer_page/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/dashboard" element={<Dashboard_page/>}></Route>
        <Route path="/auth/*" element={<Auth_page/>}></Route>
      </Routes>   
    </div>
  );
};

export default App;
