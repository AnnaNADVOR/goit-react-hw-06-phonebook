import ContactForm from "../PhoneBook/ContactForm/ContactForm";
import ContactList from "../PhoneBook/ContactList/ContactList";
import Filter from "../PhoneBook/Filter/Filter";

import {
  Container,
  MainTitle,
  SecondaryTitle,
  Titleparth,
} from "./App.styled";

export default function App() {
  return (
    <Container>
      <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
      <ContactForm/>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter/>    
      <ContactList />  
    </Container>
  )
}
