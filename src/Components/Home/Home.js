import  { useEffect, useState } from 'react';
import  fakeData from '../../fakeData/fakeData.json'
import FontPage from '../FontPage/FontPage';

import './home.css'

const Home = () => {
   const [car, setCar]= useState([])
   useEffect(() =>{

   setCar(fakeData)

   },[car])
   
    return (
        <div className="home-bg">
             <h1 >Choose Your Ride</h1>
            
            <div className="container ">
            <div className="row">

                
           
            {
                car.map(data =><FontPage car={data}></FontPage>)
            }
        
            </div>
        </div>

        </div>
    );
};

export default Home;