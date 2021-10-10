import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = ({contacts}) => (
    <ul className={s.list}>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts}/>
            </li>
        ))}
    </ul>
)

 const getVisibleContacts = (allContacts, filter) => {
    const normilizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }

const mapStateToProps = ({contacts:{items, filter}}) => {
    return {
        contacts: getVisibleContacts(items, filter)
    }
  }

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

 