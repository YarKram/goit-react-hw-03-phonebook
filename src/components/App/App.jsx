import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onInputChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    const contact = {
      id: nanoid(),
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };

    if (
      this.state.contacts.find(
        contact => contact.name === evt.currentTarget.name.value
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, contact],
      };
    });

    evt.currentTarget.name.value = '';
    evt.currentTarget.number.value = '';
  };

  onDelete = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contactId !== contact.id),
      };
    });
  };

  render() {
    const normalizedContacts = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );

    return (
      <div style={{ marginLeft: 20 }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />

        <h2>Contacts</h2>
        <Filter changeFilterValue={this.onInputChange} />
        <br />
        <ContactList deleteContact={this.onDelete} contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
