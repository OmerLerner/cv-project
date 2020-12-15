import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import NameInput from './NameInput';
import JobTitleInput from './JobTitleInput';
import data from '../data';
import ContactInput from './ContactInput';
import Contact from './Contact';


class HeaderContent extends React.Component{
    constructor(props)
    {
        super (props);
        this.state= {
            nameEdit : false,
            jobTitleEdit : false,
            contactEdit : false,
        }
        this.editName=this.editName.bind(this);
        this.editJobTitle=this.editJobTitle.bind(this);
        this.editContact=this.editContact.bind(this);
    }
    editName() {
        this.setState({ nameEdit: !this.state.nameEdit});
    }
    editJobTitle(){
        this.setState({ jobTitleEdit: !this.state.jobTitleEdit});
    }
    editContact(){
        this.setState({ contactEdit: !this.state.contactEdit});
    }

    render(){
        return(
            <section className = 'header'>
                <div className ='container'>
                    <div className='nameAndJobTitle'>
                       { this.state.nameEdit ?
                            (<NameInput done = {this.editName}/>) :
                            (<div className = 'name'>
                                <span className = 'applicantName'>{data.name}</span>
                                <FontAwesomeIcon icon={faEdit}
                                    className="fas fa-edit"
                                    aria-hidden="true"
                                    onClick={this.editName}
                                />
                            </div>)}
                        { this.state.jobTitleEdit ? 
                            (<JobTitleInput done = {this.editJobTitle} />) :
                            (<div className = 'jobTitle'>
                                <span className= 'applicantJobTitle'>{data.jobTitle}</span>
                                <FontAwesomeIcon icon={faEdit}
                                    className="fas fa-edit"
                                    aria-hidden="true"
                                    onClick={this.editJobTitle}
                                />
                            </div>)}
                    </div>
                    <div className= 'contactInfo'>
                        { this.state.contactEdit ?
                            (<ContactInput done = {this.editContact}/>) :
                            (<Contact data={data.contact} done={this.editContact}/>)
                        }
                    </div>
                </div>



            </section>
        )
    }

}

export default HeaderContent