import React from "react";
import "./App.css";
import Banner from "./containers/Banner/Banner";
import Harness from "./containers/Harness/Harness";

const App = () => {
    var portal = "User";
    return (
        <div className="App">
            <Banner portal={portal} />
            <Harness portal={portal} />
        </div>
    );
};

export default App;
