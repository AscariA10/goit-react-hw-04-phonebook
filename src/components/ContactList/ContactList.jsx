// import { element } from 'prop-types';

export const ContactList = ({ contactList }) => {
   console.log(contactList);
   return (
      <ul>
         {contactList.map(element => {
            return <li key={element}>{element}</li>;
         })}{' '}
      </ul>
   );
};
