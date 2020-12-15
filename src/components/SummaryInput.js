import React, { Component } from 'react';
import data from '../data';

class SummaryInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            summary: data.summary,
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeSummary = this.changeSummary.bind(this);
    }
    changeSummary(e){
        e.preventDefault();
        data.summary = this.state.summary;
        this.props.done();
    }
    handleChange(e){
        this.setState({ [e.target.id]: e.target.value });
    }
    render(){
        return(
            <form onSubmit={this.changeSummary}>
                <textarea 
                    type="text"
                    placeholder="Write a little bit about yourself."
                    id="summary"
                    value={this.state.summary}
                    onChange={this.handleChange} />
                <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default SummaryInput;