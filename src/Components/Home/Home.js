import  { useEffect, useState } from 'react';
import  fakeData from '../../fakeData/fakeData.json'
import FontPage from '../FontPage/FontPage';

const Home = () => {
   const [car, setCar]= useState(fakeData)
//    useEffect(() =>{

//    },[])
   
    return (
        <div>
            {
                car.map(data =><FontPage car={data}></FontPage>)
            }
        </div>
    );
};

export default Home;