import { render } from '@testing-library/react'
import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const boxes = this.props.boxes.map(box => {
            if (this.props.activeBoxes.includes(box.id)) {
                return (
                    <div className="box">
                        {box.title}
                    </div>
                )
            }
        })

        return (
            <aside>
                {boxes}
            </aside>
        )
    }
}
