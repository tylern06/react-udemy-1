import React from 'react';
import './SeasonDisplay.css'
const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: "Burr it's cold",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
    let season = getSeason(props.lat, new Date().getMonth());
    console.log('season lat', season) ;
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Dang, it is hot';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName} = seasonConfig[season];
    return (
        <div className={`seasonDisplay ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1 className="flex-item">{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    )
}

export default SeasonDisplay;