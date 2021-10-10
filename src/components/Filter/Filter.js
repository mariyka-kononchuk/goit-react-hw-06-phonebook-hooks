import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action'
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter () {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.target.value))
  return(
    <label className={s.label}>
      <span className={s.title}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}


Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func
};

// const mapStateToProps = state => {
//   return {
//       value: state.contacts.filter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: e => dispatch(actions.changeFilter(e.target.value)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);