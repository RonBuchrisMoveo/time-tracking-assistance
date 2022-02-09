import React from "react";
import {
  UserTableContainer,
  TitleList,
  EmployeeName,
  CurrentParameters,
  PredictedParameters,
  EmployeeList,
  EmployeesListContainter,
} from "./style";
import { useDispatch, useSelector } from "react-redux";

export const UserTable = () => {
  const { users } = useSelector((state) => state.data);

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
        {users.map((user) => {
          return (
            <EmployeeList>
              <EmployeeName>{user.userName}</EmployeeName>
              <CurrentParameters>{user.status}</CurrentParameters>
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
