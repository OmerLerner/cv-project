import React from 'react';
import data from '../data';

class WorkExperienceInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            jobTitle:'',
            companyName:'',
            yearStarted: '',
            yearEnded: '',
            location: '',
            bulletPoint1:'',
            bulletPoint2:'',
            bulletPoint3:'',
            bulletPoint4:'',
            bulletPoint5:'',
        };
        this.addJob = this.addJob.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    addJob(e){
        let{jobTitle,companyName,yearStarted,yearEnded,location,
        bulletPoint1,bulletPoint2,bulletPoint3,bulletPoint4,bulletPoint5} 
        = this.state;
        if(
            jobTitle.trim() === '' ||
            companyName.trim() === '' ||
            yearStarted.trim() === '' || 
            yearEnded.trim() === '' ||
            location.trim() === ''
        ){
            this.props.done();
            e.preventDefault();
            return;
        }
        const obj = (()=>{
            return{id: '',jobTitle,companyName,yearStarted,yearEnded,location,
            bulletPoint1,bulletPoint2,bulletPoint3,bulletPoint4,bulletPoint5};
        })();
        data.workExperience = data.workExperience.map((job,index)=>{
            return{...job, id: index};
        });
        data.workExperience.push({...obj, id:data.workExperience.length});
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render(){
        return (
            <form onSubmit={this.addJob}>
                <br/>
                <label className='formLabel'>Add job experience</label>
                <br/><br/>
                <label>Job Title: </label>
                <br/>
                <input
                    type='text'
                    placeholder='eg: CEO'
                    id= 'jobTitle'
                    value={this.state.jobTitle}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Company Name:</label>
                <br/>
                <input
                    type='text'
                    placeholder='eg: Wonka'
                    id= 'companyName'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Year Started:</label>
                <br/>
                <input
                    type='text'
                    placeholder=''
                    id= 'yearStarted'
                    value={this.state.yearStarted}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Year Ended:</label>
                <br/>
                <input
                    type='text'
                    placeholder=''
                    id= 'yearEnded'
                    value={this.state.yearEnded}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Location:</label>
                <br/>
                <input
                    type='text'
                    placeholder='eg: Boston, MA'
                    id= 'location'
                    value={this.state.location}
                    onChange={this.handleChange}
                />
                <br/><br/>
                <label>Job Description (Up to 5 bulletpoints)</label>
                <br/><br/>
                <label>Bulletpoint 1: </label>
                <br/>
                <input
                    type='text'
                    placeholder='Explain your job duties'
                    id= 'bulletPoint1'
                    value={this.state.bulletPoint1}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Bulletpoint 2: </label>
                <br/>
                <input
                    type='text'
                    placeholder='Explain expectations from your higher ups'
                    id= 'bulletPoint2'
                    value={this.state.bulletPoint2}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Bulletpoint 3: </label>
                <br/>
                <input
                    type='text'
                    placeholder='Explain your day to day'
                    id= 'bulletPoint3'
                    value={this.state.bulletPoint3}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Bulletpoint 4: </label>
                <br/>
                <input
                    type='text'
                    placeholder=''
                    id= 'bulletPoint4'
                    value={this.state.bulletPoint4}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Bulletpoint 5: </label>
                <br/>
                <input
                    type='text'
                    placeholder=''
                    id= 'bulletPoint5'
                    value={this.state.bulletPoint5}
                    onChange={this.handleChange}
                />
                <br/>
                <button>Submit</button>
                <button onClick = {this.props.done}>Cancel</button>
            </form>
        )
    }
}

export default WorkExperienceInput;