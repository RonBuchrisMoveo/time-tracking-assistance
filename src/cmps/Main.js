import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setUser } from '../store';
import { ItemList } from './ItemList';

export const Main = () => {
    const dispatch = useDispatch()
    const {user,board} = useSelector(state=> state.data)
    // const [currBoard,setCurrBoard]=useState()
    useEffect(async() => {
        dispatch(setUser())
        dispatch(setBoard())
    }, []);
    
    console.log('currBoard', board);
if(!board) return <div></div>
  return (
  <div>
      {board.name}
      <div className='users-container'>
          {/* {currBoard.items.map(item=>(
              <ItemList key={item.id} item={item}/>
          ))
          } */}
      </div>
      </div>
      )
};
