import React, { useEffect, useState } from 'react';

export const Main = ({monday,meta}) => {
const [user, setUser] = useState();

    useEffect(async() => {
        const { data } = await monday.api(`query {
            me {
              name
              id
              }
          }`);
          setUser(data.me)
    }, []);

    const getBoards=()=>{
    //     let query = 'query {boards (ids: 2253447852) {name owner{ id }  columns {   title   type }}}';
    //     fetch ("https://api.monday.com/v2", {
    //    method: 'post',
    //    headers: {
    //      'Content-Type': 'application/json',
    //      'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxNTIwNiwidWlkIjoyNjUwNjUxMSwiaWFkIjoiMjAyMi0wMi0wNlQxMzoxODoxMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.hBfGTpbOc86DGGbGcmmMD9gIg1P90Y8gvpgIGseWn5E'
    //     },
    //     body: JSON.stringify({
    //       'query' : query
    //     })
    //    }).then(res => res.json())
    //       .then(res => console.log(JSON.stringify(res, null, 2)));
    }
    
if(!user) return <div></div>
  return (
  <div>
      {user.name}
      <button onClick={getBoards}>boards</button>
      </div>
      )
};
