import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactItem.styled';

import { nanoid } from 'nanoid';

const ContactItem = ({ name, id, number, deleteContact }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <DeleteButton
        key={nanoid()}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
