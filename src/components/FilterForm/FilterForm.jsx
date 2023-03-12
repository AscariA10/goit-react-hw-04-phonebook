import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const FilterForm = ({ onFilter }) => {
   const [filterText, setFilterText] = useState('');

   useEffect(() => {
      onFilter(filterText);
   }, [filterText]);

   function onFilterInput(event) {
      setFilterText(event.target.value);
   }

   return (
      <div>
         <label>
            Filter:{' '}
            <input type="text" name="filterForm" onChange={onFilterInput} value={filterText} />
         </label>
      </div>
   );
};

// export class FilterForm extends Component {
//    state = {
//       filterText: '',
//    };

// onFilterInput = event => {
//    //   console.log(this.state.filterText);
//    this.setState({ filterText: event.target.value });

//    this.props.onFilter(event.target.value);
// };

//    render() {
// return (
//    <div>
//       <label>
//          Filter:{' '}
//          <input
//             type="text"
//             name="filterForm"
//             onChange={this.onFilterInput}
//             value={this.state.filterText}
//          />
//       </label>
//    </div>
// );
//    }
// }

FilterForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
