import React, { Component } from 'react';
import Components from './components';
import A from './a';


class Main extends Component {
    render () {
        /*console.log("======>",Components);
        var type = 'A'; // example variable - will change from user input
        const ComponentToRender = Components[type];
        return <ComponentToRender/>*/
        {console.log("Components=====>",Components['A']);}
        return <A/>;
    }
}

export default Main
