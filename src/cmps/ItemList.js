import React, { useState } from 'react';

export const ItemList = ({item}) => {
  console.log('item', item);
  const [monthCounter, setMonthCounter] = useState(0);
  const months = ['January','February','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
  <div className='item-container'>
    {item.column_values.map(value=>{
      if(months.includes(value.title)){
      if(value.text !==''){
       const hoursPerMonth = JSON.parse(value.text)
       setMonthCounter(monthCounter+1)
       console.log('monthCounter', monthCounter);
      }
    }
    })
    }

  </div>
  )
};
