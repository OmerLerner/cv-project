import React, { Component } from 'react';
import data from '../data';

class NameInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: data.name,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeName = this.changeName.bind(this);
    }
    changeName(e) {
        if (!this.state.name.trim()) {
            this.props.done();
            e.preventDefault();
            return;
        }
        data.name = this.state.name;
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeName}>
                <input
                    type="text"
                    placeholder="Applicant Name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button>Submit</button>
            </form>
        );
    }
}

export default NameInput;


