import React from 'react';
import { Link } from 'react-router-dom';
import "./font.css"

const FontPage = (props) => {
    const { name, img, id } = props.car
    return (


        <div className="col-lg-3">
            <Link to={`/details/${id}`}>
                <div className="Item">

                    <img src={img} alt="car"></img>
                    <p>{name}</p>
                </div></Link>
        </div>


    );
};

export default FontPage;