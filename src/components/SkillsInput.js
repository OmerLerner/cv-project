import React, { Component } from 'react';
import data from '../data'

class SkillsInput extends Component {
    constructor (props){
        super(props);
        this.state = {
            skillDescription:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }
    addSkill(e){
        let{skillDescription} = this.state;
        if (skillDescription.trim() === '')
        {
            this.props.done();
            e.preventDefault();
            return;
        }
        const obj = (() => {return {id: '', skillDescription}; })();
        data.skills = data.skills.map((skillDescription,index)=>{
            return{...skillDescription, id: index};
        });
        data.skills.push({...obj, id:data.skills.length});
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({[e.target.id]: e.target.value });
    }
    render(){
        return(
            <form onSubmit={this.addSkill}>
                <label>Add skill</label>
                <br/>
                <input
                    type="text"
                    placeholder='C++, Python, React, etc.'
                    id='skillDescription'
                    value={this.state.skillDescription}
                    onChange={this.handleChange}/>
                <br/>
                <button>Submit</button>
                <button onClick = {this.props.done}>Cancel</button>
            </form>
        );
    }
}

export default SkillsInput;