import styled from 'styled-components';
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
  background-color: ${colors.background} 
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 0.2rem solid ${colors.primary} ;
  height: 6rem;
  margin-bottom: 0.3rem;

  div{
   align-items: center;
   display: flex;

   img{
   background-color: transparent;
   height: 10vh;
   margin-left: 0.5rem;
   margin-right: 0.5rem;
   }
  }

  nav{

  div{

  button{

  background-color: ${colors.primary};
   color: ${colors.white};
   border-radius: 5rem;
   padding: 0.5em;
   text-decoration: none;
   margin-bottom: 1rem;
   width: 10rem;
   margin-left: 0.5rem;
   margin-top: 1rem;
   box-shadow: 0 4px ${colors.black};
  }

  }
  
  }




  `;