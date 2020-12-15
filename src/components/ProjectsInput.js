import React, { Component } from 'react';
import data from '../data'

class ProjectsInput extends Component{
    constructor (props){
        super (props);
        this.state = {
            projectDescription: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addProject = this.addProject.bind(this);
    }
    addProject(e){
        let{projectDescription} = this.state;
        if (projectDescription.trim() === '')
        {
            this.props.done();
            e.preventDefault();
            return;
        }
        const obj = (() => {return {id: '', projectDescription}; })();
        data.projects = data.projects.map((projectDescription,index)=>{
            return{...projectDescription, id: index};
        });
        data.projects.push({...obj, id:data.projects.length});
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({[e.target.id]: e.target.value });
    }
    render(){
        return(
            <form onSubmit={this.addProject}>
                <label className='formLabel'>Add project</label>
                <br/><br/>
                <label>Project description: </label>
                <br/>
                <textarea
                    type="text"
                    placeholder='I created a script that logs "Hello world".'
                    id='projectDescription'
                    value={this.state.projectDescription}
                    onChange={this.handleChange}/>
                <br/>
                <button>Submit</button>
                <button onClick = {this.props.done}>Cancel</button>
            </form>
        );
    }
}

export default ProjectsInput;