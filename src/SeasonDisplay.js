import './SeasonDisplay.css'; 
import React from 'react';

const seasonConfig = {
    summer:{
        text:"Let's hit the beach",
        iconName:'sun'
    },
    winter:{
        text:'Burr it is cold',
        iconName:'snowflake'
    }
};

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

// const text = season === 'Winter' ? "Burr, it's chilly" :"Let's hit on the beach";
// const icon = season === 'winter'? "snowflake" : "sun";
    
   const {text,iconName}= seasonConfig[season];//{text,iconName}
 return (
     <div className={`season-dispaly ${season}`}>

     <i className={`icon-left massive ${iconName}icon`}/>
        {text}
     <i className={`icon-right massive ${iconName}icon`}/>
     </div>
 );

};

export default SeasonDisplay;