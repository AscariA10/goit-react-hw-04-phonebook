import PropTypes from 'prop-types';

import { useState } from 'react';
import { Formik } from 'formik';
import { Form, Field, FieldLabel, FormButton } from './ContactInputForm.styled';

export const ContactInputForm = ({ onFormSubmit }) => {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   function formSubmit(event) {
      event.preventDefault();
      onFormSubmit({ name, number });
      setName('');
      setNumber('');
   }

   function onChangeFunction(event) {
      switch (event.target.name) {
         case 'name':
            setName(event.currentTarget.value);
            break;
         case 'number':
            setNumber(event.currentTarget.value);
            break;
         default:
            return;
      }
   }

   return (
      <Formik initialValues={name}>
         <Form onSubmit={formSubmit}>
            <FieldLabel>
               Name
               <Field
                  name="name"
                  type="text"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  onChange={onChangeFunction}
                  required
               />
            </FieldLabel>
            <FieldLabel>
               Tel.Number
               <Field
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={onChangeFunction}
               />
            </FieldLabel>
            <FormButton type="submit">submit</FormButton>
         </Form>
      </Formik>
   );
};

// export class ContactInputForm extends Component {
//    state = {
//       name: '',
//       number: '',
//    };

//    initialValues = {
//       name: '',
//    };

// formSubmit = event => {
//    event.preventDefault();
//    this.props.onFormSubmit(this.state);
//    this.setState({ name: '', number: '' });
// };

// onChangeFunction = event => {
//    console.log(this.state);

//    this.setState({
//       [event.target.name]: event.currentTarget.value,
//    });
// };

//    render() {
// return (
//    <Formik initialValues={this.initialValues}>
//       <Form onSubmit={this.formSubmit}>
//          <FieldLabel>
//             Name
//             <Field
//                name="name"
//                type="text"
//                value={this.state.name}
//                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                title="Name may contain only letters, apostrophe, dash and spaces."
//                onChange={this.onChangeFunction}
//                required
//             />
//          </FieldLabel>
//          <FieldLabel>
//             Tel.Number
//             <Field
//                type="tel"
//                name="number"
//                value={this.state.number}
//                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                required
//                onChange={this.onChangeFunction}
//             />
//          </FieldLabel>
//          <FormButton type="submit">submit</FormButton>
//       </Form>
//    </Formik>
// );
//    }
// }

ContactInputForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
