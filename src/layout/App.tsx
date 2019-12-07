import React from 'react'
import Homepage from "@src/layout/Homepage";
import HomepageIconSet from "@src/layout/HomepageIconSet";
import GetContactField from "@src/layout/GetContactsField";
import About from "@src/layout/About";

export default class App extends React.Component {

    render() {
        return <div>
            <Homepage/>
            <HomepageIconSet/>
            <GetContactField/>
            <About/>
        </div>;
    }
}
