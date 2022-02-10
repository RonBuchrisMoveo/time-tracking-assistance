import React from "react";
import {
  UserTableContainer,
  TitleList,
  EmployeeName,
  CurrentParameters,
  PredictedParameters,
  EmployeeList,
  EmployeesListContainter,
  StatusParameter
} from "./style";
import { useDispatch, useSelector } from "react-redux";

export const UserTable = () => {
  const { users, filterUsers } = useSelector((state) => state.data);
  const listItems = filterUsers?.length ? filterUsers : users;

  return (
    <UserTableContainer>
      <TitleList>
        <EmployeeName>Employee Name</EmployeeName>
        <CurrentParameters>Status</CurrentParameters>
        <CurrentParameters>Months</CurrentParameters>
        <CurrentParameters>Hours</CurrentParameters>
        <PredictedParameters>Average Cost\Month</PredictedParameters>
        <PredictedParameters>Predicted Annual Cost</PredictedParameters>
      </TitleList>
      <EmployeesListContainter>
        { listItems.map((user) => {
          return (
            <EmployeeList>
              <EmployeeName>{user.userName}</EmployeeName>
              <StatusParameter isActive={user.status === 'Active'}>{user.status}</StatusParameter>
              <CurrentParameters>{user.months}</CurrentParameters>
              <CurrentParameters>{user.hours}</CurrentParameters>
              <PredictedParameters>
                {(user.hours / user.months) * user.costPerHour} ₪
              </PredictedParameters>
              <PredictedParameters>
                {(user.hours / user.months) * 12 * user.costPerHour} ₪
              </PredictedParameters>
            </EmployeeList>
          );
        })}
      </EmployeesListContainter>
    </UserTableContainer>
  );
};
