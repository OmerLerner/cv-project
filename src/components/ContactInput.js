import React, { Component } from 'react';
import data from '../data';

class ContactInput extends Component {
    constructor(props) {
    
        super(props);
        this.state = {
            phoneNumber : data.contact.phoneNumber,
            email : data.contact.email,
            linkedin : data.contact.linkedin,
            other: data.contact.other,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeContactInfo = this.changeContactInfo.bind(this);
    }
    changeContactInfo(e) {
        data.contact.phoneNumber = this.state.phoneNumber.trim();
        data.contact.email = this.state.email.trim();
        data.contact.linkedin = this.state.linkedin.trim();
        data.contact.other = this.state.other;
        e.preventDefault();
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeContactInfo}>
            <div className ='formLabel'>Contact Info</div>
            <br/>
                <div className = 'contactElement'>
                    <label>Phone: </label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        id="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className = 'contactElement'>
                    <label>Email: </label>
                    <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className = 'contactElement'>
                    <label>Linkedin: </label>
                    <input
                        type="text"
                        placeholder="Linkedin"
                        id="linkedin"
                        value={this.state.linkedin}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <div className = ''>
                <label>Other: </label>
                    <input
                        type="text"
                        placeholder="Other"
                        id="other"
                        value={this.state.other}
                        onChange={this.handleChange}
                    ></input>
                </div>
                <br />
                <button>Submit</button>
            </form>
        );
    }
}

export default ContactInput;


