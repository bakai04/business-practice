import '../css/main.scss';
import toggleMenu from './modules/toggleMenu';
import getLocation from './modules/getLocation.js';
import modulePage from './modules/modulePage.js'
import toggleModalPage from "./modules/toggleModalPage.js";
import consultationForm from './modules/consultationForm.js';
modulePage(); 
getLocation();
toggleModalPage();
toggleMenu();
consultationForm()


