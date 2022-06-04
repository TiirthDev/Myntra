import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
    return (

        <div className="app" >
            <Router>
                <Routes>
                    <Route path="checkout" element={<><Header /><Checkout /></>} >
                    </Route>
                    <Route path="login" element={<Login />}>
                    </Route>
                    <Route path="/" element={<><Header /><Home /></>}>
                    </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;