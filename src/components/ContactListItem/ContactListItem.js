import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action'
import s from './ContactListItem.module.css';

const ContactListItem = ({contacts, onDeleteContact }) => (
    <div className={s.item}>
        <p className={s.contact}>
            <span className={s.name}>{contacts.name}:
            </span>
            <span className={s.number}>{contacts.number}
            </span>
        </p>
        <button className={s.button} onClick={()=> onDeleteContact(contacts.id)}>Delete</button>
    </div> 
)

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
  }
}

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
    onDeleteContact:PropTypes.func.isRequired
};