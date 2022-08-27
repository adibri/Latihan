import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Search() {
  const location = useLocation()
  const [locationState, setLocationState] = useState({
    dataParams: null
  })

  useEffect(() => {
    console.log('propsss', location)
    if(location.state) {
        const states = location.state
        setLocationState(states)
    }
  }, [location])
  return (
    <div>
        Search
        {locationState.name}
    </div>
  )
}

export default Search