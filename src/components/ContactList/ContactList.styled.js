import styled from 'styled-components';

export const StyledContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const StyledContactItem = styled.li`
  flex: 0 1 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border: none;
  width: 30px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d63431;
  }
`;
