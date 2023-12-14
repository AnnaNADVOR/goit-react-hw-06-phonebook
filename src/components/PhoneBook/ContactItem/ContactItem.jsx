import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import { Name, Number, RemoveButton } from "./ContactItem.styled";

function ContactItem({ contact }) {
    const dispatch = useDispatch(); 
    const onDeleteContact = () => dispatch(deleteContact(contact.id))
    return (
        <>
            <Name>{contact.name}:
                <Number>{contact.number}</Number>
            </Name> 
            <RemoveButton onClick={onDeleteContact} type="button"> 
                <BsFillTrash3Fill />                
            </RemoveButton> 
        </>              
    )
}

export default ContactItem;