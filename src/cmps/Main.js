import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoards, setUser } from '../store';
import { ItemList } from './ItemList';
export const Main = () => {
    const dispatch = useDispatch()
    const {user,board} = useSelector(state=> state.data)
    // const [currBoard,setCurrBoard]=useState()
    useEffect(() => {
        dispatch(setUser())
        dispatch(setBoard())
    }, []);
    

if(!board) return <div></div>
  return (
  <div className='main-container'>
      {board.name}
      <div className='users-container'>
          {board.items.map(item=>(
              <ItemList key={item.id} item={item}/>
          ))
          }
      </div>
      </div>
      )
};
