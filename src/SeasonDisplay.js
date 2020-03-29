import React from 'react';

const getSeason = (lat,month)=>{
    if (month>2 && lat<9){
        return lat>0? 'summer':'winter';
    }
    else{
        return lat>0? 'Winter':'Summer';
    }
}

const SeasonDisplay = (props)=>{
const season = getSeason(props.lat,new Date().getMonth());
// console.log(season);

const text = season === 'Winter' ? "Burr, it's chilly" :"Let's hit on the beach";
    
 return (
     <div>
        {text}
     </div>
 );

};

export default SeasonDisplay;