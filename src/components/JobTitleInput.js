import React, { Component } from 'react';
import data from '../data';

class JobTitleInput extends Component {
    constructor(props) {
    
        super(props);
        this.state = {
            jobTitle: data.jobTitle,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeJobTitle = this.changeJobTitle.bind(this);
    }
    changeJobTitle(e) {
        if (!this.state.jobTitle.trim()) {
            this.props.done();
            e.preventDefault();
            return;
        }
        data.jobTitle = this.state.jobTitle;
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeJobTitle}>
                <input
                    type="text"
                    placeholder="Job Title"
                    id="jobTitle"
                    value={this.state.jobTitle}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button>Submit</button>
            </form>
        );
    }
}

export default JobTitleInput;


