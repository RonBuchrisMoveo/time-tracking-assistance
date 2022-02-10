import React from "react";
import { TotalCostContainer, Price, Title } from "./style";
import { useSelector } from "react-redux";

export const TotalMonthlyCost = () => {
  const { users, filterUsers } = useSelector((state) => state.data);
  const listItems = filterUsers?.length ? filterUsers : users;

  const calcTotalMontlyCost = () => {
    let cost = 0;
    listItems.forEach((user) => {
      cost += (user.hours / user.months) * user.costPerHour;
    });
    return cost;
  };

  const totalCost = Math.round(calcTotalMontlyCost());

  return (
    <TotalCostContainer>
      <Title>TOTAL MONTHLY COSTS</Title>
      <Price> $ {totalCost.toLocaleString()} </Price>
    </TotalCostContainer>
  );
};
