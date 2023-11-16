import createHomePage from './homepage';
import createNav from './navigation';
import whatsOn from './whats-on';

function initialLoad() {
    // createHomePage();
    whatsOn()
    createNav();
}

export default initialLoad;