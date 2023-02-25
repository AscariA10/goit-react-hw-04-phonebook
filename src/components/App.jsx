import React, { Component } from 'react';

import { ContactInputForm } from './ContactInputForm/ContactInputForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
   state = {
      contacts: [1, 2, 3, 4, 5],
      name: '',
   };

   onFormSubmit = data => {
      // console.log(this.state.contacts);
      this.setState(() => {
         return { contacts: [data, ...this.state.contacts] };
      });
   };

   render() {
      return (
         <>
            <ContactInputForm name={this.state.name} onFormSubmit={this.onFormSubmit} />
            <ContactList contactList={this.state.contacts} />
         </>
      );
   }
}
