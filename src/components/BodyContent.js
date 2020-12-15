import React, {} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import data from '../data';
import Summary from './Summary';
import SummaryInput from './SummaryInput';
import Education from './Education';
import EducationInput from './EducationInput';
import Projects from './Projects';
import ProjectsInput from './ProjectsInput';
import Skills from './Skills';
import SkillsInput from './SkillsInput';
import WorkExperience from './WorkExperience';
import WorkExperienceInput from './WorkExperienceInput';


class BodyContent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            summaryEdit : false,
            educationEdit : false,
            projectsEdit: false,
            skillsEdit: false,
            workExpEdit: false,
        }
        this.editSummary = this.editSummary.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.editProjects = this.editProjects.bind(this);
        this.editSkills = this.editSkills.bind(this);
        this.editWorkExperience = this.editWorkExperience.bind(this);


    }
    editSummary() {
        this.setState({ summaryEdit: !this.state.summaryEdit});
    }
    editEducation() {
        this.setState({ educationEdit: !this.state.educationEdit});
    }
    editProjects() {
        this.setState({ projectsEdit: !this.state.projectsEdit});
    }
    editWorkExperience() {
        this.setState({ workExpEdit: !this.state.workExpEdit});
    }
    editSkills() {
        this.setState({ skillsEdit: !this.state.skillsEdit});
    }

    render(){
        return(
            <section className = 'body'>
                <div className=''>
                    <div className= 'heading'>Career objective
                        <FontAwesomeIcon icon={faEdit}
                        className="fas fa-edit"
                        aria-hidden="true"
                        onClick={this.editSummary}
                    /></div>
                    <div className = 'resumeContent'>
                        {this.state.summaryEdit ? (
                            <SummaryInput done={this.editSummary} />
                            ) : (
                            <Summary summary={data.summary} />
                            )}
                    </div>
                    <div className = 'heading'>Education
                        <FontAwesomeIcon icon={faEdit}
                        className="fas fa-edit"
                        aria-hidden="true"
                        onClick={this.editEducation}
                    /></div>
                    <div className = 'resumeContent'>
                        {this.state.educationEdit ? (
                            <EducationInput done={this.editEducation} />
                        ): null}
                        <Education
                            education={data.education}
                            edit={this.state.educationEdit}
                        />
                    </div>
                    <div className = 'heading'>Projects
                        <FontAwesomeIcon icon={faEdit}
                        className="fas fa-edit"
                        aria-hidden="true"
                        onClick={this.editProjects}
                    /></div>
                    <div className = 'resumeContent'>
                        {this.state.projectsEdit ? (
                            <ProjectsInput done={this.editProjects} />
                        ): null}
                        <Projects
                            projects={data.projects}
                            edit={this.state.projectsEdit}
                        />
                    </div>
                    <div className= 'heading'>Skill Highlights
                        <FontAwesomeIcon icon={faEdit}
                        className="fas fa-edit"
                        aria-hidden="true"
                        onClick={this.editSkills}
                    /></div>
                    <div className = 'resumeContent'>
                        {this.state.skillsEdit ? (
                            <SkillsInput done = {this.editSkills} />
                        ): null}
                        <Skills
                            skills={data.skills}
                            edit={this.state.skillsEdit}
                        />
                    </div>
                    <div className= 'heading workExperience'>Work Experience
                        <FontAwesomeIcon icon={faEdit}
                        className="fas fa-edit"
                        aria-hidden="true"
                        onClick={this.editWorkExperience}
                    /></div>
                    <div className = 'resumeContent finalContent'>
                        {this.state.workExpEdit ? (
                            <WorkExperienceInput done = {this.editWorkExperience} />
                        ): null}
                        <WorkExperience
                            workExperience={data.workExperience}
                            edit={this.state.workExpEdit}
                        />
                    </div>


                </div>

            </section>
        )
    }
}
export default BodyContent