import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "antd/dist/antd.css";
import TableOfUser from "./js/pages/table-users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TableOfUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
