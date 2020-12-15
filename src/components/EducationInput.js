import React from 'react';
import data from '../data';

class EducationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: '',
            degreeType: '',
            subject: '',
            yearStarted: '',
            yearEnded: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
    }
    addEducation(e){
        let {schoolName, degreeType, subject, yearStarted, yearEnded} = this.state;
        if (
            schoolName.trim() === '' ||
            degreeType.trim() === '' ||
            subject.trim() === '' ||
            yearStarted.trim() === '' ||
            yearEnded.trim() === ''
        ){
            this.props.done();
            e.preventDefault();
            return;
        }
        const obj = (() =>{
            return{id: '', schoolName, degreeType,subject,yearStarted,yearEnded}
        })();
        data.education = data.education.map((education,index) =>{
            return {...education, id: index};
        });
        data.education.push({...obj, id: data.education.length});
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.addEducation}>
                <label className='formLabel'>Add education</label>
                <br/><br/>
                <label>University/College Name</label>
                <br/>
                <input
                    type="text"
                    placeholder="eg: UCLA"
                    id="schoolName"
                    value={this.state.schoolName}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <label>Degree Type: </label>
                <br/>
                <input
                    type="text"
                    placeholder="eg: BA,MA"
                    id="degreeType"
                    value={this.state.degreeType}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <label>Subject:</label>
                <br/>
                <input
                    type="text"
                    placeholder="eg: Computer Science"
                    id="subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <label>Starting Year:</label>
                <br/>
                <input
                    type="text"
                    placeholder="2020"
                    id="yearStarted"
                    value={this.state.yearStarted}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <label>Ending Year: </label>
                <br/>
                <input
                    type="text"
                    placeholder="2025"
                    id="yearEnded"
                    value={this.state.yearEnded}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <button>Submit</button>
                <button onClick = {this.props.done}>Cancel</button>
                <br/><br/>
            </form>
        );
    }
}

export default EducationInput;