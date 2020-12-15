import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import data from '../data';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: this.props.projects,
        };
        this.deleteProject = this.deleteProject.bind(this);
    }
    deleteProject(e){
        data.projects.splice(Number(e.target.id), 1);
        this.setState( {projects: data.projects});
    };
    render(){
        let projectsArray = this.props.projects.map((project, index)=>{
            return(
                <div className='projectContent' key={index}>
                    <div className='projectDescription'>{this.props.edit ?(
                            <FontAwesomeIcon icon={faTrashAlt}
                                    className="trashIcon"
                                    aria-hidden="true"
                                    onClick={this.deleteProject}
                                />) : null}
                                &bull; {project.projectDescription}</div>
                    
                </div>
            );
        })
        return <div>{projectsArray}</div>
    }
}

export default Projects;