import React from "react";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
           <Header />
           <Blogs />
           <Footer />
        </div>
    )
}

export default App;