import React from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Content from "./containers/Content/Content";

const App = () => {
    var portal = "User";
    return (
        <div className="App">
            <Header portal={portal} />
            <Content portal={portal} />
            <Footer />
        </div>
    );
};

export default App;
