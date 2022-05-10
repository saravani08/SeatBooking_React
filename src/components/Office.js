import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Office extends Component {

    constructor() {
        super();

        this.state = {
            office: ''
        };
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
        this.setState({
            office: e.target.value
        });
    }
    handleClick =()=>  {
        const navigate = useNavigate();
        navigate('../User')
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <strong>Select Office:</strong>

                    <ul>
                        <li>
                            <label>
                                <input type="radio" value="Office1" checked={this.state.office === "Office1"} onChange={this.onRadioChange} />
                                <span>Office1</span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <input type="radio" value="Office2" checked={this.state.office === "Office2"} onChange={this.onRadioChange} />
                                <span>Office2</span>
                            </label>
                        </li>
                    </ul>

                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Office