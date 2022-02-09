import styled from "styled-components";

export const UserTableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  max-width: 1000px;
  min-width: 1000px;
  max-height: 300px;
  min-height: 300px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  overflow-y: scroll;
`;

export const TitleList = styled.div`
  position: sticky;
  top: 0;
  border-radius: 15px 15px 0 0;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  background: #c4c4c4;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: #000000;
  padding: 16px;
`;

export const EmployeeName = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 220px;
  max-width: 220px;
`;

export const CurrentParameters = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 90px;
  max-width: 90px;
`;

export const PredictedParameters = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 180px;
  max-width: 180px;
`;

export const EmployeeList = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #000000;
  padding: 16px;
  border-top: 1px solid #d9dbe9;
`;

export const EmployeesListContainter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 1000px;
  min-width: 1000px;
`;
