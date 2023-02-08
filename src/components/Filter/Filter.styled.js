import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  & > input {
    width: 250px;
    margin-top: 10px;
  }
`;
