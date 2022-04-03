import React, { Component } from 'react'
import Toggle from './Toggle';

export default class Mainbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const toggles = this.props.boxes.map(box => {
            return <Toggle handleChange={this.props.handleChange} activeBoxes={this.props.activeBoxes} box={box}/> 
        });
        return (
            <main>
                {toggles}
            </main>
        )
    }
}
