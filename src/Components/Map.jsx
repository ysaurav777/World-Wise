import React from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Map() {
  const navigate=useNavigate();
  const [searchPara,setSearchPara]=useSearchParams();
  const lat=searchPara.get("lat")
  const lng=searchPara.get("lng")
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <h1>Map
        Postion: {lat} {lng}
      </h1>
      <button onClick={()=>{setSearchPara({lat:5,lng:8})}}>Change Position</button>
    </div>
  )
}

export default Map