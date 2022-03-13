import React, { useState } from 'react';

import Categories from '../../Components/Buttons/Categories/Categories.jsx';
import ModelCategories from '../../Components/Buttons/Categories/CategoriesModel.jsx';
import { faGamepad, faMusic, faMicrophoneAlt, faFire, faSatelliteDish, faGraduationCap, faRoad } from '@fortawesome/free-solid-svg-icons';

const arrModels = [
    new ModelCategories(faGamepad ,'Games', false),
    new ModelCategories(faMusic ,'Music', false),
    new ModelCategories(faMicrophoneAlt ,'Chatting', false),
    new ModelCategories(faFire ,'Trends', false),
    new ModelCategories(faSatelliteDish, 'Live', false),
    new ModelCategories(faGraduationCap, 'Learning', false),
    new ModelCategories(faRoad, 'Street', false),

  
];

function App() {
  return (
    <div >
      <header >
        <h1>Componentes de botones DRAKU</h1>
      </header>
      <div>
        <div>
          <h5>Menu:</h5>
             <Categories models={arrModels}/>          
        </div>
      </div>
    </div>
  );
}

export default App;