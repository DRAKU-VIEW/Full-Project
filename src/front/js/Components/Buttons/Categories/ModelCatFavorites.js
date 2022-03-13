import ModelCategories from './CategoriesModel.jsx';
import { faGamepad, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

const arrModelsFavCat = [
    new ModelCategories(faGamepad ,'Games'),
    new ModelCategories(faMicrophoneAlt ,'Chatting')
  
];

export {arrModelsFavCat};