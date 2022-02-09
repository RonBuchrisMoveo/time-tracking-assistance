import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store';

export const ItemList = ({user}) => {
  const dispatch = useDispatch()
  return (
  <div className='item-container'>
<div>name:  {user.userName}</div>
<div>status:  {user.status}</div>
<div>months counter:  {user.months}</div>
<div>hrs:  {user.hours}</div>
<div>avg cost per month:  {(user.hours/user.months)*user.costPerHour} ₪</div>
<div>predicted annual cost:  {((user.hours/user.months)*12)*user.costPerHour} ₪</div>
<div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
  </div>
  )
};
