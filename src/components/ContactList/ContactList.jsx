import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactList.styled';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, id, number }) => {
    return (
      <Item className="decorate" key={id}>
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
  });
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
