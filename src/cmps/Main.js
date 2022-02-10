import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard, setBoards, setUser } from '../store';
import { ItemList } from './ItemList';
import { UserTable } from './userTable/UserTable';
import { UsersChart } from './Chart';
import { SearchBar } from './SearchBar';
import { TotalAnnualCost } from './totalCost/TotalAnnualCost';
import { Row, DataContainer, TotalCost, Header, MainContainer,ChartContainer } from './style';
import { TotalMonthlyCost } from './totalCost/TotalMonthlyCost';

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
  <MainContainer>
      <Header>
           <SearchBar users={users}/>
      </Header>
      <DataContainer>
          <Row>
            <ChartContainer>
                <UsersChart users={users}/>
            </ChartContainer>
            <TotalCost>
                <TotalAnnualCost />
                <TotalMonthlyCost />
            </TotalCost> 
          </Row>
            <div>
                <UserTable/>
            </div>
      </DataContainer>
      </MainContainer>
      )
};
