import React from 'react'
import Home from "@src/layout/Home";
import About from "@src/layout/About";
import HowItWorks from "@src/layout/HowItWorks";
import WeGive from "@src/layout/WeGive";
import Advantages from "@src/layout/Advantages";
import Network from "@src/layout/Network";

export default class App extends React.Component {

    render() {
        return <div>
            <Home/>
            <About/>
            <HowItWorks/>
            <WeGive/>
            <Advantages/>
            <Network/>
        </div>;
    }
}
