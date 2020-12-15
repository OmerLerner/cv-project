import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import data from '../data';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            skills: this.props.skills,
        };
        this.deleteSkill = this.deleteSkill.bind(this);
    }
    deleteSkill(e){
        data.skills.splice(Number(e.target.id), 1);
        this.setState( {skills: data.skills});
    };
    render(){
        let skillsArray = this.props.skills.map((skill,index)=>{
            return(
                <div className='skillDescription' key={index}>
                    &bull; {skill.skillDescription}
                    {this.props.edit ?(
                            <FontAwesomeIcon icon={faTrashAlt}
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                    onClick={this.deleteSkill}
                                />) : null}
                </div>
            );
        })
        return <div className='resumeSkills'>{skillsArray}</div>
    }
}

export default Skills;