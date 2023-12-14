import { addContact } from "../../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Report } from 'notiflix/build/notiflix-report-aio';

import { BsFillPersonFill, BsFillPersonPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import {
    Form,
    FormField,
    Label,
    Input,
    InputSection,
    SubmitButton
} from "./ContactForm.styled";
import { getContacts } from "../../../redux/selectors";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts); 
    const handleSubmitForm = (event) => {
        event.preventDefault(); 
        const form = event.target; 
        const name = form.elements.name.value; 
        const number = form.elements.number.value; 
       
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            Report.info(
                "Enter a unique name!",
                `Contact's name "${name}" already exists.`,
                "OK", 
            )
            return;
        }
 
        dispatch(addContact(name, number));
        form.reset();
    }

    return (
        <Form onSubmit={handleSubmitForm}> 
            <FormField>
                <Label>Name</Label>
                <InputSection>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name Surname"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                    />
                    <BsFillPersonFill />
                </InputSection>                    
            </FormField>
            <FormField>
                <Label>Number </Label>
                    <InputSection>
                        <Input
                            type="tel"
                            name="number"
                            placeholder="+xx (xxx) xxx-xx-xx"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <BsFillTelephoneFill />
                    </InputSection>                    
            </FormField>                               
            <SubmitButton type="submit">Add contact
                <BsFillPersonPlusFill />
            </SubmitButton>
        </Form>        
    )
}

