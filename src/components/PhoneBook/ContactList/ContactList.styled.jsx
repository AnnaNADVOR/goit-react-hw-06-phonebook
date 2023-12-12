import styled from "@emotion/styled";

export const List = styled.ul `
    list-style: none;
  

    padding: 0 10px;

    margin: 20px auto 0;
  
`
export const Contact = styled.li `
    display:flex;
    justify-content: space-between;
    gap: 20px; 
    align-items: center; 

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`