import React from 'react'
import Homepage from "@src/layout/Homepage";
import HomepageIconSet from "@src/layout/HomepageIconSet";

export default class App extends React.Component {

    render() {
        return <div>
            <Homepage/>
            <HomepageIconSet/>
        </div>;
    }
}
