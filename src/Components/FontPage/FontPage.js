import React from 'react';
import { Link } from 'react-router-dom';
import "./font.css"

const FontPage = (props) => {
    const {name,img} = props.car
    return (
      
          
     <div className="col-lg-3">
            <Link to="/details">
                  <div className="Item">
        <h3>name:{name}</h3>
        <img src={img}></img>
    </div></Link>
     </div>
        
     
    );
};

export default FontPage;