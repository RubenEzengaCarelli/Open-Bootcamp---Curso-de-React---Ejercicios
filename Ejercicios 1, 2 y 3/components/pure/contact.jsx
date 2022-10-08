import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                { contact.firstname }
            </h2>
            <h3>
                Last Name: { contact.lastname }
            </h3>
            <h4>
                Conected: { contact.conected ? 'Contacto En Linea':'Contacto No Disponible' }
            </h4>
            <h5>
                Email: { contact.email }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
