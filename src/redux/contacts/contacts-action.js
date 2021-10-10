//with Redux Toolkit
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('app/addContact', ({name,number}) => ({
    payload: {
        id: uuidv4(),
        name,
        number
    }   
}))

export const deleteContact = createAction('app/deleteContact');
export const changeFilter = createAction('app/changeFilter');

    


//without Redux Toolkit
// import actionTypes from './contacts-types';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = ({name,number}) => ({
//     type: actionTypes.ADD_CONTACT,
//     payload: {
//       id: uuidv4(),
//       name,
//       number
//     }
// });

// export const deleteContact = contactId => ({
//     type: actionTypes.DELETE_CONTACT,
//     payload: contactId
// });

// export const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value
// });


