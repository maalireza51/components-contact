import React, { Component } from 'react'

export default class Boxes extends Component {
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
    handleChange({ target }, id) {
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
        const toggles = this.state.boxes.map(box => {
            return (
                <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button b2" id="button">
                            <input type="checkbox" className="checkbox" onClick={(e) => this.handleChange(e, box.id)} defaultChecked={!this.state.activeBoxes.includes(box.id)} />
                            <div className="knobs">
                                <span></span>
                            </div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
            )
        });
        const boxes = this.state.boxes.map(box => {
            if (this.state.activeBoxes.includes(box.id)) {
                return (
                    <div className="box">
                        {box.title}
                    </div>
                )
            }
        })

        return (
            <>
                <aside>
                    {boxes}
                </aside>
                <main>
                    {toggles}
                </main>
            </>
        )
    }
}
