import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text:     'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text:     'Brr, it\'s cold!',
    iconName: 'snowflake'
  }
}
const getSeason = (lat, month) => {
  if (month>2 && month<9) {
    return lat > 0 ? 'summer':'winter'
  } else {
    return lat > 0 ? 'winter':'summer'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]
  return(
    <div className={'SeasonDisplay ' + season}>
      <i className={ 'massive ' + iconName + ' icon' }></i>
      <h1>{ text }</h1>
    </div>
  )
}

export default SeasonDisplay