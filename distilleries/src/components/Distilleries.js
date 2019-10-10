import React from 'react';
import Distillery from './Distillery'

const Distilleries = (props) => {
  return (
    <div className="heading">
    {props.isFetching ? (<p>We have acquired this distillery list!</p>) : 
    (
    <div className="address">
    {props.breweries.map( (brewery) =>  <Distillery key={brewery.id} breweryName={brewery.name} address={brewery.street} />)}
    </div>)}
    </div>
  )}

export default Distilleries;