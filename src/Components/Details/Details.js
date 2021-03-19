import React from 'react';
import map from '../../images/Map.png'

const Details = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="path">
                            {/* <div class="mb-3"> */}
                            {/* <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div> */}
                            <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Example label</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Example label</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            <div class="mb-3">
                            
                                <input type="submit" class="form-control bg-danger" ></input>
                            </div>
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