import React from 'react';
import './App.css';
import {Component} from 'react';
class A extends Component {
    constructor(props) {
        super(props);
        console.log("=======>",props);
    }
    render() {
        return(

            <div className="App">
                <span>A</span>
            </div>
        )
    }
}

export default A;
