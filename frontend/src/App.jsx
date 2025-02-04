import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./index.css";
import Footer from "./Components/Footer";
import { SignUp } from "./Components/SignUp";
import PrivateComponent from "./Components/PrivateComponent";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/home" element={<h1> Product List </h1>}></Route>

            <Route
              path="/add"
              element={<h1>Added product list here</h1>}
            ></Route>
            <Route
              path="/update"
              element={<h1>Updated product list here</h1>}
            ></Route>
            <Route
              path="/logout"
              element={<h1>Deleted product list here</h1>}
            ></Route>
            <Route path="/profile" element={<h1>Profile page </h1>}></Route>
            <Route path="/login" element={<h1> login page</h1>}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
