import React from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Rubén', 'Ezenga Carelli', 'rubenezenga@gmail.com', false);

    // const ChangeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea')
    // }

    return (
        <div>
            <div>
                <h1>
                    Your Contact:
                </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <ContactComponent contact = {defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
