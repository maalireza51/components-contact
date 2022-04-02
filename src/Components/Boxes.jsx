import React, { Component } from 'react'

export default class Boxes extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        if (target.checked) {
            // target.removeAttribute('checked');
            target.setAttribute('checked', false);
        } else {
            target.setAttribute('checked', true);
        }
    }
    render() {
        return (
            <>
                <aside>
                    <span className="box">
                        box1
                    </span>
                    <span className="box">
                        box2
                    </span>
                    <span className="box">
                        box3
                    </span>
                    <span className="box">
                        box4
                    </span>
                </aside>
                <main>
                    <div className="toggle-button-cover">
                        <div className="button-cover">
                            <div className="button b2" id="button">
                                <input type="checkbox" className="checkbox" onClick={this.handleChange} defaultChecked={this.props.complete} />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="toggle-button-cover">
                        <div className="button-cover">
                            <div className="button b2" id="button">
                                <input type="checkbox" className="checkbox" onClick={this.handleChange} defaultChecked={this.props.complete} />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
