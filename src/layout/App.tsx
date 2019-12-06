import React from 'react'
import Homepage from "@src/layout/Homepage";
import HomepageIconSet from "@src/layout/HomepageIconSet";
import GetContactField from "@src/layout/GetContactsField";

export default class App extends React.Component {

    render() {
        return <div>
            <Homepage/>
            <HomepageIconSet/>
            <GetContactField/>
        </div>;
    }
}
