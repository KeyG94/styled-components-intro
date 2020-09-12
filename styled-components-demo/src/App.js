import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import PageHeading from './components/headings/PageHeading';
import ParagraphText from './components/paragraphSupport/ParagraphSupport';
import ConfirmButton from './components/form/Button';
import FormMargin, { FormContainer } from './components/form/Form';
import InputForm from './components/form/Input';
import SideNoteText from './components/side-note/SideNote';
import SpeciaDeal from './components/special/Special';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle  />
      <SpeciaDeal />
      <PageHeading  />
      <ParagraphText  />
      <FormMargin>
        <FormContainer>
          <InputForm placeholder='Name on card'/>
          <InputForm placeholder='Card number'/>
          <InputForm placeholder='Expiry date'/>
          <InputForm placeholder='Security number'/>
          <ConfirmButton />
        </FormContainer>
      </FormMargin>
      <SideNoteText />
    </ThemeProvider>
  );
}

export default App;
