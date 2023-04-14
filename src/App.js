import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Signin from "./SignUpIn/Signin";
import Signup from "./SignUpIn/Signup";
import Todo from "./Todo/Todo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
