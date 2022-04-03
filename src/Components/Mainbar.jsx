import React, { Component } from 'react'

export default class Mainbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const toggles = this.props.boxes.map(box => {
            return (
                <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button b2" id="button">
                            <input type="checkbox" className="checkbox" onClick={(e) => this.props.handleChange(box.id)} defaultChecked={!this.props.activeBoxes.includes(box.id)} />
                            <div className="knobs">
                                <span></span>
                            </div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <main>
                {toggles}
            </main>
        )
    }
}
