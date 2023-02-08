import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  & > input {
    width: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    outline: solid 1px green;
    color: green;
  }
`;
