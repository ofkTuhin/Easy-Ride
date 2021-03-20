import React, { useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
import fakeData from '../../fakeData/fakeData.json'

const Details = () => {
    const { id } = useParams()
    console.log(fakeData)



    const carDetails = fakeData.find(data => data.id == id)
    console.log(carDetails)

    const [place, setPlace] = useState({
        source: '',
        destination: '',
        isSearch: false,
    })





    const handleBlur = (event) => {
        const newPlace = { ...place }
        newPlace[event.target.name] = event.target.value
        setPlace(newPlace)
        console.log(place)

    }
    const handleSubmit = () => {

    }
    const handleSearch = () => {
        const newPlace = { ...place }
        newPlace.isSearch = true;
        setPlace(newPlace)

    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="path">
                            {place.isSearch && <div className="desc">
                                <h3>name:{carDetails.name}</h3>
                                <p>{place.source}</p>
                                <p>{place.destination}</p>
                            </div>}

                            {!place.isSearch && <div>
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">

                                        <input type="text" class="form-control" onBlur={handleBlur} name="source" required></input>
                                    </div>
                                    <div class="mb-3">

                                        <input type="text" class="form-control" onBlur={handleBlur} name="destination" required></input>
                                    </div>

                                    <div class="mb-3">
                                        <button type="submit" onClick={handleSearch} >Search</button>

                                    </div>
                                </form>
                            </div>}

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="map">
                            <img src={map} alt="map"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;