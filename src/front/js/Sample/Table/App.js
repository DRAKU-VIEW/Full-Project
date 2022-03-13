import React, { useState } from 'react';

import TableMessage from '../../Components/Table/TableMessage.jsx';

function App() {

const list = ["Usuario1", "Hola que ase"]

  return (
    <div>
      <header>
        <h1>Componentes tablas de DRAKU</h1>
      </header>
      <div>
        <div>
          <h5>Tabla de Mensajes:</h5>
          <TableMessage col1={"User"} col2={"Message"} content1={list[0]} content2={list[1]} handleClick={""}/>
        </div>
      </div>
    </div>
  );
}

export default App;