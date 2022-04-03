import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Box from './Box';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const boxes = this.props.boxes.map(box => {
            if (this.props.activeBoxes.includes(box.id)) {
                return <Box title={box.title} />
            }
        })

        return (
            <aside>
                {boxes}
            </aside>
        )
    }
}
