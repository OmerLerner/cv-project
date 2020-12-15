import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import data from '../data';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            education : this.props.education,
        };
        this.deleteEducation = this.deleteEducation.bind(this);
    }
    deleteEducation(e){
        data.education.splice(Number(e.target.id), 1);
        this.setState( {education : data.education});
    };
    render(){
       let educationArray = this.props.education.map((info,index)=>{
            return(
                <div className='educationContent' key={index}>
                    <div className='degreeTypeAndSubject'>
                        {`${info.degreeType} in  ${info.subject}`}
                        {this.props.edit ?(
                            <FontAwesomeIcon icon={faTrashAlt}
                                    className="fas fa-trash-alt"
                                    aria-hidden="true"
                                    onClick={this.deleteEducation}
                                />) : null}
                    </div>
                    <div className='schoolNameAndEndYear'>
                        {`Class of ${info.yearEnded} / ${info.schoolName}`}
                    </div>
                </div>
            );
       }) 
       return <div>{educationArray}</div>
    }
}


export default Education;