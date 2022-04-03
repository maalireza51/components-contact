import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='box'>
                {this.props.title}
            </div>
        )
    }
}
