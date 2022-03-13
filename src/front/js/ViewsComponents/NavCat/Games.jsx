import React from 'react';
import Categories from '../../Components/Buttons/Categories/Categories.jsx'; 
import { arrModelsCat } from '../../Components/Buttons/Categories/ModelCat.js'

const Games = () => {

    return (
        <>
            <Categories models={arrModelsCat}/>     
        </>
    );
};

export default Games;