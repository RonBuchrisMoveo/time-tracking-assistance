import React from "react";
import { TotalCostContainer, Price, Title } from "./style";
import { useSelector } from "react-redux";

export const TotalAnnualCost = () => {
  const { users, filterUsers } = useSelector((state) => state.data);
  const listItems = filterUsers?.length ? filterUsers : users;

  const calcTotalCost = () => {
    let cost = 0;
    listItems.forEach((user) => {
      cost += (user.hours / user.months) * 12 * user.costPerHour;
    });
    return cost;
  };

  const totalCost = Math.round(calcTotalCost());

  return (
    <TotalCostContainer>
      <Title>TOTAL ANUUAL COSTS</Title>
      <Price>{totalCost.toLocaleString()} ₪</Price>
    </TotalCostContainer>
  );
};
