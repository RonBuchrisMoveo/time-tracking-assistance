import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoards, setUser } from '../store';
import { ItemList } from './ItemList';
import { UserTable } from './userTable/UserTable';
import { UsersChart } from './Chart';
import { SearchBar } from './SearchBar';

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
      <div className='search-bar'><SearchBar users={users}/></div>
      <div className='charts'><UsersChart users={users}/></div>
      {/* <div className='users-container'>
          {users.map((user,idx)=>{
             return <ItemList key={idx} user={user}/>
          })
          }
      </div> */}
      <UserTable/>
      </div>
      )
};
