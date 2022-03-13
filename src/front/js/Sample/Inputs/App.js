import React, { useState } from 'react';
import { faSearch,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import PrimaryInput from '../../Components/Inputs/Primary/PrimaryInput.jsx';
import SecondaryInput from '../../Components/Inputs/Secondary/SecondaryInput.jsx';
import TertiaryInput from '../../Components/Inputs/Tertiary/TertiaryInput.jsx';
import Quaternary from '../../Components/Inputs/Quaternary/Quaternary.jsx';

function App() {
  const [textInput, setTextInput] = useState("Search...")
  const [textLanguage, setTextLanguage] = useState("English")
  const [textLanguage2, setTextLanguage2] = useState("Spanish")



  const handleClikPrimary = () => {
    console.log("Boton pulsado");
    setTextInput("Search...");
  };
  const handleSearchTertiary = () => {
    console.log("Boton pulsado");
    setTextInput("Search...");
  };
  const handleSubmitPrimary = (ev) => {
    console.log("Boton pulsado");
  };
  const handleSearchPrimary = () => {
    console.log("Boton buscar pulsado");
  };
  const handleClikSecondary = () => {
    if(textLanguage2 === "Spanish") {
      setTextLanguage("Spanish")
      setTextLanguage2("English")
    } else if (textLanguage2 === "English"){
      setTextLanguage("English")
      setTextLanguage2("Spanish")
    }
  };

  return (
    <>
      <header >
        <h1>Inputs DRAKU</h1>
      </header>
      <div>
        <div>
          <h5>Primario:</h5>
          <form onSubmit={ev => handleSubmitPrimary(ev)}>
            <PrimaryInput placeholder={textInput} handleClick={handleClikPrimary} handleSearch={handleSearchPrimary} search={faSearch}/>
          </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <h5>Secundario:</h5>
          <SecondaryInput principalText={textLanguage} secondaryText={textLanguage2} handleClick={handleClikSecondary}/>
        </div>
        <div>
          <h5>Terciario:</h5>
          <TertiaryInput handleShow={handleSearchTertiary} check={true} valuePlace={'Ismael'} typeInput={true} eye={faEye} noEye={faEyeSlash}/>
        </div>
        <div>
          <h5>Cuaternario:</h5>
          <Quaternary valueText={'Hola mi amor, estas solo viendo porno'}/>
        </div>
      </div>
    </>
  );
}

export default App;