import React from 'react';


const TeamMembers = props => {
    


    return (

        <>

        {
            props.members.map(member =>{
                return(
                <div className="card" key={member.id}>
                    <h3>{member.name}</h3>
                </div>
                );
            })

        
        }

        
        </>

    );


}

export default TeamMembers;