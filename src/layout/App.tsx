import React from 'react'
import Home from "@src/layout/Home";
import About from "@src/layout/About";
import HowItWorks from "@src/layout/HowItWorks";
import WeGive from "@src/layout/WeGive";
import Advantages from "@src/layout/Advantages";
import Network from "@src/layout/Network";
import Tarif from "@src/layout/Tarif";
import Calculator from '@src/layout/Calculator';
import ChargedCities from "@src/layout/ChargedCities";
import Necessary from "@src/layout/Necessary";
import TopSix from "@src/layout/TopSix";
import Footer from "@src/layout/Footer";

export default class App extends React.Component {

    render() {
        return <div>
            <Home/>
            <About/>
            <HowItWorks/>
            <WeGive/>
            <Advantages/>
            <Network/>
            <Tarif/>
            <Calculator/>
            <ChargedCities/>
            <Necessary/>
            <TopSix/>
            <Footer/>
        </div>;
    }
}
