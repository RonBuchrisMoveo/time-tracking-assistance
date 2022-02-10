import styled from "styled-components";

export const TotalCostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  gap: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 280px;
  padding: 16px;
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  letter-spacing: 0.25px;
`;
export const Price = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  letter-spacing: 0.5px;
`;
