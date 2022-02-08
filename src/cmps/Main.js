import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store';
import { ItemList } from './ItemList';

export const Main = ({monday,meta}) => {
    const dispatch = useDispatch()
    const [currBoard,setCurrBoard]=useState()
    useEffect(async() => {
        const { data } = await monday.api(`query {
            me {
              name
              id
              }
          }`);
          dispatch(setUser(data.me))
          getBoards()
    }, []);

    const getBoards=()=>{
        let query = 'query { boards (ids: 2257151977) { name state board_folder_id items { id name column_values {title text } } }}'
        fetch ("https://api.monday.com/v2", {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
         'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxNTIwNiwidWlkIjoyNjUwNjUxMSwiaWFkIjoiMjAyMi0wMi0wNlQxMzoxODoxMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.hBfGTpbOc86DGGbGcmmMD9gIg1P90Y8gvpgIGseWn5E'
        },
        body: JSON.stringify({
          'query' : query
        })
       }).then(res => res.json())
          .then(res => setCurrBoard(res.data.boards[0]));
    }
    
if(!currBoard) return <div></div>
console.log('currBoard', currBoard);
  return (
  <div>
      {currBoard.name}
      <div className='users-container'>
          {currBoard.items.map(item=>(
              <ItemList key={item.id} item={item}/>
          ))

          }
      </div>
      </div>
      )
};
