import { BsSearch } from "react-icons/bs";
import { Section} from "./Filter.styled";
import { FormField, Label, Input, InputSection } from "../ContactForm/ContactForm.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../../redux/filterSlice";
import { getContacts } from "../../../redux/selectors";

import Notification from "../Notification/Notification";

function ContactSearch() { 
    const contacts = useSelector(getContacts); 

    const filterValue = useSelector(state => state.filter.name); 
    const dispatch = useDispatch(); 
    const onChange = event => {
        dispatch(setFilter(event.currentTarget.value.trim()));
    }
    
    return (
        <>
            {contacts.length > 0
                ? <Section>
                    <FormField>
                        <Label>Find contacts by name</Label>
                        <InputSection>
                            <Input  type="text" name="name" value={filterValue} onChange={(onChange)} />   
                            <BsSearch/>   
                        </InputSection>               
                    </FormField>
                </Section>
                : <Notification message="There is no contacts" />} 
        </>
        
             
    )
}

export default ContactSearch; 