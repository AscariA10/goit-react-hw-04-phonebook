import PropTypes from 'prop-types';

import { Component } from 'react';
import { Formik } from 'formik';
import { Form, Field, FieldLabel, FormButton } from './ContactInputForm.styled';

export class ContactInputForm extends Component {
   state = {
      name: '',
      number: '',
   };

   initialValues = {
      name: '',
   };

   formSubmit = event => {
      event.preventDefault();
      this.props.onFormSubmit(this.state);
      this.setState({ name: '', number: '' });
   };

   onChangeFunction = event => {
      console.log(this.state);

      this.setState({
         [event.target.name]: event.currentTarget.value,
      });
   };

   render() {
      return (
         <Formik initialValues={this.initialValues}>
            <Form onSubmit={this.formSubmit}>
               <FieldLabel>
                  Name
                  <Field
                     name="name"
                     type="text"
                     value={this.state.name}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces."
                     onChange={this.onChangeFunction}
                     required
                  />
               </FieldLabel>
               <FieldLabel>
                  Tel.Number
                  <Field
                     type="tel"
                     name="number"
                     value={this.state.number}
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                     onChange={this.onChangeFunction}
                  />
               </FieldLabel>
               <FormButton type="submit">submit</FormButton>
            </Form>
         </Formik>
      );
   }
}

ContactInputForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
