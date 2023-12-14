import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { List, Contact } from "./ContactList.styled";
import { getContacts, getFilter } from "../../../redux/selectors";
import Notification from "../Notification/Notification";

function ContactList() {
    const contacts = useSelector(getContacts); 
    const filter = useSelector(getFilter); 
    const getVisibleContacts = () => {
        const normalizeFilter = filter.toLocaleLowerCase();
        const findContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter));
        return findContacts;
    }

    const visibleContacts = getVisibleContacts(); 

    return (
        <List>
            {contacts.length > 0 && visibleContacts.length === 0
                ? (<Notification message={`Contact's name "${filter}" not found.`} />)
                : <>
                    {visibleContacts.map(contact =>
                        <Contact key={contact.id}>
                            <ContactItem contact={contact}/>
                        </Contact>     
                    )}
                </>
            }                 
        </List>              
    )
}

export default ContactList; 