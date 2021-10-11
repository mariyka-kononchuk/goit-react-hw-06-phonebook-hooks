import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action'
import s from './ContactListItem.module.css';

export default function ContactListItem({ contacts }) {
const dispatch = useDispatch();
return (
    <div className={s.item}>
        <p className={s.contact}>
            <span className={s.name}>{contacts.name}:
            </span>
            <span className={s.number}>{contacts.number}
            </span>
        </p>
    <button className={s.button} onClick={() => dispatch(actions.deleteContact(contacts.id))}>Delete</button>
    </div> 
)
} 


// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   }
// }

//export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })

};