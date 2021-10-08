import  { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function SignupForm({onAddContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = e => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

     const handleSubmit = e => {
        e.preventDefault();
        onAddContact({ name, number });
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <form  onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>
                    <span className={s.title}>Name</span>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={s.label}>
                    <span className={s.title}>Number</span>
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button className={s.button} type="submit">Add contact</button>
            </form>

    )
}

SignupForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

