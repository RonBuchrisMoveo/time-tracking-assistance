import React, { useState } from 'react';

export const ItemList = ({item}) => {
  console.log('item', item);
  const values = item.column_values
  let status;
  let CostPerHour;
  let counter = 0
  let hours = 0
  const months = ['January','February','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
  <div className='item-container'>
    {values.map(value=>{
      if(months.includes(value.title)){
      if(value.text !==''){
        const hoursPerMonth = JSON.parse(value.text)
        counter++
        hours+=hoursPerMonth
      }
    }
    if(value.title==='Status') status=value.text
    if(value.title==='Hourly Rate') CostPerHour=value.text
  })
}
<div>name:  {item.name}</div>
<div>status:  {status}</div>
<div>months counter:  {counter}</div>
<div>hrs:  {hours}</div>
<div>avg cost per month:  {(hours/counter)*CostPerHour} ₪</div>
<div>predicted annual cost:  {((hours/counter)*12)*CostPerHour} ₪</div>
<div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>

  </div>
  )
};
