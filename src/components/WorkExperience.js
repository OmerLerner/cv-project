import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import data from '../data';

class WorkExperience extends Component {
    constructor(props){
        super(props);
        this.state = {
            workExperience : this.props.workExperience,
        };
        this.deleteJob = this.deleteJob.bind(this);
    }
    deleteJob(e){
        data.workExperience.splice(Number(e.target.id),1);
        this.setState({workExperience: data.workExperience});
    }
    render(){
        let jobArray= this.props.workExperience.map((info,index)=>{
            return(
                <div className= 'jobContent' key={index}>
                    <div className='jobNameAndCompany'>
                        {`${info.jobTitle} / ${info.companyName}`}
                        {this.props.edit ?(
                            <FontAwesomeIcon icon={faTrashAlt}
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                    onClick={this.deleteJob}
                                />) : null}
                    </div>
                    <div className='dateAndLocation'>
                        {`${info.yearStarted} - ${info.yearEnded} / ${info.location}`}
                    </div>
                    {info.bulletPoint1 !== '' ? (
                        <div className = 'bulletPoint'>
                        &bull; {info.bulletPoint1} </div>) : null }
                    {info.bulletPoint2 !== '' ? (
                        <div className = 'bulletPoint'>
                        &bull; {info.bulletPoint2} </div>) : null } 
                    {info.bulletPoint3 !== '' ? (
                        <div className = 'bulletPoint'>
                        &bull; {info.bulletPoint3} </div>) : null } 
                    {info.bulletPoint4 !== '' ? (
                        <div className = 'bulletPoint'>
                        &bull; {info.bulletPoint4} </div>) : null }  
                    {info.bulletPoint5 !== '' ? (
                        <div className = 'bulletPoint'>
                        &bull; {info.bulletPoint5} </div>) : null }         
                
                </div>
            )
        })
        return <div>{jobArray}</div>
    }
}

export default WorkExperience;