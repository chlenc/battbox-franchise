import React from 'react'
import Homepage from "@src/layout/Homepage";
import HomepageIconSet from "@src/layout/HomepageIconSet";
import GetContactField from "@src/layout/GetContactsField";
import About from "@src/layout/About";
import HowItWorks from "@src/layout/HowItWorks";
import Advantages from "@src/layout/Advantages";
import WeGive from "@src/layout/WeGive";

export default class App extends React.Component {

    render() {
        return <div>
            <Homepage/>
            <HomepageIconSet/>
            <GetContactField/>
            <About/>
            <HowItWorks/>
            <Advantages/>
            <WeGive/>
        </div>;
    }
}
