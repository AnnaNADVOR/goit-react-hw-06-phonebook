import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { List, Contact } from "./ContactList.styled";
import { getContacts, getFilter } from "../../../redux/selectors";







function ContactList() {
    const contacts = useSelector(getContacts); 
    const filter = useSelector(getFilter); 
 
    const getVisibleContacts = () => {
        const normalizeFilter = filter.toLocaleLowerCase();
        const findContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
        return findContacts;
    }

    const visibleContacts = getVisibleContacts(contacts, filter); 

    return (
        <List>
            {visibleContacts.map( contact =>
                <Contact key={contact.id}>
                    <ContactItem contact={contact}/>
                </Contact>     
            )}
        </List>              
    )
}

export default ContactList; 