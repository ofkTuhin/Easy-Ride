import React, { useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
import fakeData from '../../fakeData/fakeData.json'
import './details.css'
import people from '../../images/peopleicon.png'


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
  
    const handleSearch = () => {
        const newPlace = { ...place }
        newPlace.isSearch = true;
        setPlace(newPlace)

    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <div className="path">
                            {place.isSearch && <div className="placeDesc  shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="place">
                                    <p>{place.source}</p>
                                    <div className="dot"></div>
                                    <div className="line"></div>
                                    <div className="dot"></div>
                                    <p>{place.destination}</p>
                                </div>
                                <div className="car">
                                    <div className="rideInfo">
                                        <div className="info"><img src={carDetails.img} alt="car"></img></div>
                                        <div className="info"><p>{carDetails.name}</p></div>
                                        <div className="info"  style={{
                                            display:'flex'
                                        }}><img src={people} alt="people"></img><p>4</p></div>
                                        <div className="payment"><p>$64</p></div>
                                        
                                        
                                    </div>
                                    <div className="rideInfo">
                                        <div className="info"><img src={carDetails.img} alt="car"></img></div>
                                        <div className="info"><p>{carDetails.name}</p></div>
                                        <div className="info"  style={{
                                            display:'flex'
                                        }}><img src={people} alt="people"></img><p>4</p></div>
                                        <div className="payment"><p>$64</p></div>
                                        
                                        
                                    </div>
                                    <div className="rideInfo">
                                        <div className="info"><img src={carDetails.img} alt="car"></img></div>
                                        <div className="info"><p>{carDetails.name}</p></div>
                                        <div className="info"  style={{
                                            display:'flex'
                                        }}><img src={people} alt="people"></img><p>4</p></div>
                                        <div className="payment"><p>$64</p></div>
                                        
                                        
                                    </div>

                                </div>
                                
                            </div>}

                            {!place.isSearch && <div className="placeForm  shadow-lg p-3 mb-5 bg-body rounded ">
                                <form >
                                    <div className="form-group">
                                        <label>Pick From</label>

                                        <input type="text" className="form-control" onBlur={handleBlur} name="source" required></input>
                                    </div>
                                    <div class="form-group">

                                        <label>pic To</label>

                                        <input type="text" className="form-control" onBlur={handleBlur} name="destination" required></input>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" onClick={handleSearch} className="btn btn-primary col-12" >Search</button>

                                    </div>
                                </form>
                            </div>}

                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-sm-12 col-lg-8">
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