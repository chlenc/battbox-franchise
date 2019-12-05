import React from 'react'
import Homepage from "@src/layout/Homepage";
import HomepageIconSet from "@src/layout/Homepage/HomepageIconSet";

export default class App extends React.Component {

    render() {

        return <div>
            <Homepage/>
            <HomepageIconSet/>

        </div>;
    }
}
