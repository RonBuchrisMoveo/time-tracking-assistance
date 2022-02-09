import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoards, setUser } from '../store';
import { ItemList } from './ItemList';
export const Main = () => {
    const dispatch = useDispatch()
    const {user,board,users} = useSelector(state=> state.data)
    // const [currBoard,setCurrBoard]=useState()
    useEffect(() => {
        dispatch(setUser())
        dispatch(setBoard())
    }, []);
    
if(!users) return <div></div>
  return (
  <div className='main-container'>
      <div className='search-bar'></div>
      <div className='charts'></div>
      <div className='users-container'>
          {users.map((user,idx)=>{
             return <ItemList key={idx} user={user}/>
          })
          }
      </div>
      </div>
      )
};
