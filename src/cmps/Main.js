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
    
if(!user) return <div></div>
  return (
  <div>
      {user.name}
      </div>
      )
};
