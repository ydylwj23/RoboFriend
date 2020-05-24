import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div>
            <img alt='Robot' src={`https://robohash.org/${id + 1}?set=set4`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;