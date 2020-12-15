import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEnvelope, faGlobe, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component{
    constructor(props)
    {
        super (props);
        this.state={}
    }

    render(){
        let {phoneNumber,email,linkedin,other} = this.props.data;
        return(
            <div className = 'contactInfo'>
                 <div className='contactDiv'>
                    Contact Info
                    <FontAwesomeIcon icon={faEdit}
                                    className="fas fa-edit"
                                    aria-hidden="true"
                                    onClick={this.props.done}
                    />
                </div>
                {phoneNumber === '' || (
                    <div className='contactDiv'>
                        <span className='contactLabel'>Phone: </span>
                        <span className="">{phoneNumber}</span>
                        <FontAwesomeIcon icon={faPhoneSquareAlt}
                                    className="contactIcons"
                                    aria-hidden="true"
                                    onClick={this.props.done}
                    />
                    </div>
                )}
                {email === '' || (
                    <div className='contactDiv'>
                        <span className='contactLabel'>Email: </span>
                        <span className="">{email}</span>
                        <FontAwesomeIcon icon={faEnvelope}
                                    className="contactIcons"
                                    aria-hidden="true"
                                    onClick={this.props.done}
                    />
                    </div>
                )}
                {linkedin === '' || (
                    <div className='contactDiv'>
                        <span className='contactLabel'>Linkedin: </span>
                        <span className="">{linkedin}</span>
                        <FontAwesomeIcon icon={faLinkedin}
                                    className="contactIcons"
                                    aria-hidden="true"
                                    onClick={this.props.done}
                    />
                    </div>
                )}
                {other === '' || (
                    <div className='contactDiv'>
                        <span className=''>{other}</span>
                        <FontAwesomeIcon icon={faGlobe}
                                    className="contactIcons"
                                    aria-hidden="true"
                                    onClick={this.props.done}
                    />
                        
                    </div>
                )}
            </div>
        )
    }
}
export default Contact;