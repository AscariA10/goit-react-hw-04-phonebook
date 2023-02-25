import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class ContactInputForm extends Component {
   state = {
      name: '',
   };

   initialValues = {
      name: '',
   };

   formSubmit = event => {
      event.preventDefault();
      this.props.onFormSubmit(this.state.name);
      this.setState({ name: '' });
   };

   onChangeFunction = event => {
      console.log(this.state.name);
      console.log(event.currentTarget.elements);
      this.setState({
         name: event.currentTarget.elements.name.value,
      });
   };

   render() {
      return (
         <Formik initialValues={this.initialValues}>
            <Form onChange={this.onChangeFunction} onSubmit={this.formSubmit}>
               <label>
                  Name
                  <Field
                     name="name"
                     type="text"
                     value={this.state.name}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces."
                     required
                  />
               </label>
               <button type="submit">submit</button>
            </Form>
         </Formik>
      );
   }
}
