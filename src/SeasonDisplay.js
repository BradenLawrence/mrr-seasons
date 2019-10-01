import React from 'react'

const getSeason = (lat, month) => {
  if (month>2 && month<9) {
    return lat > 0 ? 'summer':'winter'
  } else {
    return lat > 0 ? 'winter':'summer'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  let seasonText = season === 'winter' ? "Brr, it's chilly!" : "Let's hit the beach!"
  return(
    <h1>{ seasonText }</h1>
  )
}

export default SeasonDisplay