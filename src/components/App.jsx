import { useState, useEffect } from 'react';

import { ContactInputForm } from './ContactInputForm/ContactInputForm';
import { ContactList } from './ContactList/ContactList';
import { FilterForm } from './FilterForm/FilterForm';
import { Wrapper } from './App.styled';

export const App = () => {
   const savedContactList = JSON.parse(localStorage.getItem('saved-contact-list'));

   const [contacts, setContacts] = useState(savedContactList ?? []);
   const [filter, setFilter] = useState('');

   useEffect(() => {
      localStorage.setItem('saved-contact-list', JSON.stringify(contacts));
   }, [contacts.length]);

   function onFormSubmit(data) {
      if (contactCheck(data.name)) {
         return alert(`${data.name} alredy in contacts`);
      }
      setContacts(prevState => [data, ...prevState]);
   }

   function contactCheck(uncheckedContact) {
      return contacts.some(element => {
         return element.name === uncheckedContact;
      });
   }

   function onFilter(data) {
      setFilter(data);
      filterContacts(filter);
   }

   function filteredData() {
      if (filter.length > 0) {
         return filterContacts(filter);
      }
      return contacts;
   }

   function filterContacts(contactInfo) {
      return contacts.filter(element =>
         element.name.toLowerCase().includes(contactInfo.toLowerCase())
      );
   }

   function deleteHandler(contact) {
      setContacts(...[contacts.filter(element => element.name !== contact)]);
   }

   return (
      <Wrapper>
         <ContactInputForm onFormSubmit={onFormSubmit} />
         <FilterForm onFilter={onFilter} />
         <ContactList contactList={filteredData()} deleteHandler={deleteHandler} />
      </Wrapper>
   );
};

// export class App extends Component {
//    state = {
//       contacts: [
//          // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//          // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//          // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//          // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
//       filter: '',
//    };

//    componentDidMount() {
//       const savedContactList = JSON.parse(localStorage.getItem('saved-contact-list'));

//       console.log(savedContactList);

// if (!savedContactList) {
//    console.log('savedContactList', savedContactList);
//    return;
// }
// this.setState({ contacts: [...savedContactList] });
//    }

//    componentDidUpdate() {
//       localStorage.setItem('saved-contact-list', JSON.stringify(this.state.contacts));
//    }

// onFormSubmit = data => {
//    if (this.contactCheck(data.name)) {
//       return alert(`${data.name} alredy in contacts`);
//    }

// this.setState(() => {
//    return { contacts: [data, ...this.state.contacts] };
// });
//    };

// contactCheck = uncheckedContact => {
//    return this.state.contacts.some(element => {
//       return element.name === uncheckedContact;
//    });
// };

// onFilter = data => {
//    this.setState({ filter: data });
//    // this.filterContacts(this.state.filter);
// };

// filterContacts = contactInfo => {
//    console.log(contactInfo);
//    return this.state.contacts.filter(element =>
//       element.name.toLowerCase().includes(contactInfo.toLowerCase())
//    );
// };

// filteredData = () => {
//    if (this.state.filter.length > 0) {
//       return this.filterContacts(this.state.filter);
//    }
//    return this.state.contacts;
// };

// deleteHandler = contact => {
//    this.setState(() => {
//       console.log(this.state.contacts);
//       return {
//          contacts: [...this.state.contacts.filter(element => element.name !== contact)],
//       };
//    });
// };

//    render() {
// return (
//    <Wrapper>
//       <ContactInputForm name={this.state.name} onFormSubmit={this.onFormSubmit} />
//       <FilterForm onFilter={this.onFilter} />
//       <ContactList contactList={this.filteredData()} deleteHandler={this.deleteHandler} />
//    </Wrapper>
// );
//    }
// }
