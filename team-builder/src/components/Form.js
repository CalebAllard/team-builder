import React, {useState} from 'react';



const Form = props => {

    const [member, setMember] = useState({
        name: ""
        
    });
    function handleChange(event){
        
        setMember( {...member, [event.target.name]: event.target.value});
        console.log(event.target.value);
    }
    function handeleSubmit(event){
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: ''})
    }

    return (
        

        <form onSubmit={handeleSubmit}>
            <label htmlFor='name'>Name: 
            <input type='text' name='name' id='name' onChange={handleChange} value={member.name} /> </label>
            <button type="submit">Add Member</button>
        </form>
        
        

    );




}

export default Form;