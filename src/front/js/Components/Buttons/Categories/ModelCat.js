import ModelCategories from './CategoriesModel.jsx';
import { faGamepad, faMusic, faMicrophoneAlt, faFire, faSatelliteDish, faGraduationCap, faRoad } from '@fortawesome/free-solid-svg-icons';

const arrModelsCat = [
    new ModelCategories(faGamepad ,'Games'),
    new ModelCategories(faMusic ,'Music'),
    new ModelCategories(faMicrophoneAlt ,'Chatting'),
    new ModelCategories(faFire ,'Trends'),
    new ModelCategories(faSatelliteDish, 'Live'),
    new ModelCategories(faGraduationCap, 'Learning'),
    new ModelCategories(faRoad, 'Street'),
  
];

export {arrModelsCat};