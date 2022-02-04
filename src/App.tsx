import React from "react";
import "./App.css";
import Banner from "./containers/Banner/Banner";
import Footer from "./containers/Footer/Footer";
import Content from "./containers/Content/Content";

const App = () => {
    var portal = "User";
    return (
        <div className="App">
            <Banner portal={portal} />
            <Content portal={portal} />
            <Footer />
        </div>
    );
};

export default App;
