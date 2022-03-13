import React, { useState } from 'react';

import { faHeart } from '@fortawesome/fontawesome-free-regular';

import PrimaryButton from '../../Components/Buttons/Primary/PrimaryButton.jsx';
import SecondaryButton from '../../Components/Buttons/Secondary/SecondaryButton.jsx';
import TertiaryButton from '../../Components/Buttons/Tertiary/TertiaryButton.jsx';
import ButtonLetter from '../../Components/Buttons/Letters/ButtonLetter.jsx';

function App() {
  
  return (
    <div >
      <header >
        <h1>Componentes de botones DRAKU</h1>
      </header>
      <div>
        <div>
          <h5>Primario:</h5>
          <PrimaryButton placeholder={"Save Changes"} changePlacehold={"Saved"} />
        </div>
        <div>
          <h5>Secundario:</h5>
          <SecondaryButton placeholder={"Update"} changePlacehold={"Updated"}  />
        </div>
        <div>
          <h5>Terciario:</h5>
          <TertiaryButton placeholder={"Follow"} changePlacehold={"Following"} symbol={faHeart}/>
        </div>
        <div>
          <h5>Letter:</h5>
          <ButtonLetter placeholder={"Following"} changePlacehold={"Following"}  goTo={"#"}/>
        </div>
      </div>
    </div>
  );
}

export default App;