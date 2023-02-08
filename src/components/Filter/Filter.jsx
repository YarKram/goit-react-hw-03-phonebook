import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ changeFilterValue }) => {
  return (
    <Label>
      Find contacts by name
      <input onChange={changeFilterValue}></input>
    </Label>
  );
};

Filter.propTypes = {
  changeFilterValue: PropTypes.func.isRequired,
};

export default Filter;
