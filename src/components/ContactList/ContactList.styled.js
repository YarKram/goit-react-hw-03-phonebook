import styled from 'styled-components';

export const Item = styled.li`
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 500px) {
    max-width: 50%;
  }

  @media only screen and (min-width: 720px) {
    max-width: 35%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 17%;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    outline: solid 1px red;
    color: red;
  }
`;
