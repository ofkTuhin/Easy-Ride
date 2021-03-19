import React from 'react';

const FontPage = (props) => {
    const {name,img} = props.car
    return (
        <div>
            <h3>name:{name}</h3>
            <img src={img}></img>
        </div>
    );
};

export default FontPage;