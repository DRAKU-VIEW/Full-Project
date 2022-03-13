import MenuModel from './ModelsMenu.jsx';
import { faUser, faHeart, faCommentDots } from '@fortawesome/fontawesome-free-regular';
import { faFilm, faCog, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
const arrModels = [
    new MenuModel(faUser ,'Profile'),
    new MenuModel(faFilm ,'Channel'),
    new MenuModel(faHeart ,'Subscribers'),
    new MenuModel(faCommentDots ,'Messages'),
    new MenuModel(faCog ,'Settings'),
    new MenuModel(faDoorOpen ,'LogOut')
];

export {arrModels};