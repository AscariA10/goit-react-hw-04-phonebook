import PropTypes from 'prop-types';
import { Component } from 'react';

export class FilterForm extends Component {
   state = {
      filterText: '',
   };

   onFilterInput = event => {
      //   console.log(this.state.filterText);
      this.setState({ filterText: event.target.value });

      this.props.onFilter(event.target.value);
   };

   render() {
      return (
         <div>
            <label>
               Filter:{' '}
               <input
                  type="text"
                  name="filterForm"
                  onChange={this.onFilterInput}
                  value={this.state.filterText}
               />
            </label>
         </div>
      );
   }
}

FilterForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
