import React, { Component } from 'react'
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { id: 1, title: 'box1' },
                { id: 2, title: 'box2' },
                { id: 3, title: 'box3' },
                { id: 4, title: 'box4' },
            ],
            activeBoxes: [1, 2, 3, 4]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        const activeBoxes = [...this.state.activeBoxes];
        if (activeBoxes.includes(id)) {
            activeBoxes.splice(activeBoxes.indexOf(id), 1);
        } else {
            activeBoxes.push(id);
        }
        this.setState(state => {
            return {
                ...state,
                activeBoxes
            }
        })
    }
    render() {
        return (
            <>
                <Sidebar
                    activeBoxes={this.state.activeBoxes}
                    boxes={this.state.boxes}
                />
                <Mainbar
                    activeBoxes={this.state.activeBoxes}
                    boxes={this.state.boxes}
                    handleChange={this.handleChange}
                />
            </>
        )
    }
}
