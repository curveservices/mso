import createHomePage from './homepage';
import listeners from './listeners';
import createNav from './navigation';
import whatsOn from './whats-on';

function initialLoad() {
    createHomePage();
    createNav();
    listeners();
}

export default initialLoad;