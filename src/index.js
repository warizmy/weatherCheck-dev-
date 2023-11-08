import 'lazysizes';
import main from './view/main';
import './component/weather-box';
import './component/forecast';
import './styles/styles.css';
import './component/header-nav';
import './component/search-bar';
import './component/use-location';
import './component/wind-details';
import './component/temp-details';
import './component/sun-details';
import './component/hum-details';
import './component/pressure-details';
import './component/visibility-details';
import './component/feelsLike-details';
import './component/loading.circle';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', main, swRegister);
