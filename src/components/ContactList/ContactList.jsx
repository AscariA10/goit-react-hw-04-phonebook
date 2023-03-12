import PropTypes from 'prop-types';
import { DeleteButton, ContactElement, ContactListMarkup } from './ContactList.styled';

export const ContactList = ({ deleteHandler, contactList }) => {
   return (
      <>
         <p>Contacts</p>
         <ContactListMarkup>
            {contactList.map((element, index) => {
               return (
                  <ContactElement key={index}>
                     {element.name}: {element.number}
                     <DeleteButton type="button" onClick={() => deleteHandler(element.name)}>
                        Delete
                     </DeleteButton>
                  </ContactElement>
               );
            })}
         </ContactListMarkup>
      </>
   );
};

// export class ContactList extends Component {
// onDeleteContact = event => {
//    console.log(event.currentTarget.name);
//    this.props.deleteHandler(event);
// };
//    render() {
// return (
//    <>
//       <p>Contacts</p>
//       <ContactListMarkup>
//          {this.props.contactList.map((element, index) => {
//             return (
//                <ContactElement key={index}>
//                   {element.name}: {element.number}
//                   <DeleteButton
//                      type="button"
//                      onClick={() => this.props.deleteHandler(element.name)}
//                   >
//                      Delete
//                   </DeleteButton>
//                </ContactElement>
//             );
//          })}
//       </ContactListMarkup>
//    </>
// );
//    }
// }

ContactList.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
