import React from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from './Message'

function CountryList({cities,isLoading}) {
  if (isLoading) return <Spinner/>;

  if (!cities.length) return <Message message="Add City of you choice by click on map"/>

  return (
    <ul className={styles.countryList}>
      {cities.map((city)=>(<CountryItem country={city} key={city.id}/>))}
    </ul>
  )
}

export default CountryList