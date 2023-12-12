import { BsSearch } from "react-icons/bs";
import { Section} from "./Filter.styled";
import { FormField, Label, Input, InputSection } from "../ContactForm/ContactForm.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../../redux/filterSlice";

function ContactSearch() { 
    const filterValue = useSelector(state => state.filter.name); 
    const dispatch = useDispatch(); 
    const onChange = event => {
        dispatch(setFilter(event.currentTarget.value.trim()));
    }
    
    return (
        <Section>
            <FormField>
            <Label>Find contacts by name</Label>
            <InputSection>
                <Input  type="text" name="name" value={filterValue} onChange={(onChange)} />   
                <BsSearch/>   
            </InputSection>               
        </FormField>
        </Section>
    )
}

export default ContactSearch; 