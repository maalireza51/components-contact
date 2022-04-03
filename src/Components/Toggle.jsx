import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="toggle-button-cover">
                <div className="button-cover">
                    <div className="button b2" id="button">
                        <input type="checkbox" className="checkbox" onClick={(e) => this.props.handleChange(this.props.box.id)} defaultChecked={!this.props.activeBoxes.includes(this.props.box.id)} />
                        <div className="knobs">
                            <span></span>
                        </div>
                        <div className="layer"></div>
                    </div>
                </div>
            </div>
        )
    }
}
