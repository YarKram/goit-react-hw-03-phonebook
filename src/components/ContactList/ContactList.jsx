import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, id, number }) => {
    return (
      <ContactItem
        key={id}
        deleteContact={deleteContact}
        name={name}
        id={id}
        number={number}
      />
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
