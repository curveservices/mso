import createHomePage from "./homepage";
import whatsOn from "./whats-on";

const createNav = () => {
    const dropDownContent = document.querySelector('.dropdown-content');
    const dropDown = document.querySelector('.nav-container');
   
    //mobile menu view
    document.addEventListener('DOMContentLoaded', () => {
        dropDown.addEventListener('click', () => {
            dropDownContent.classList.toggle('mobile-menu')
        });

        window.addEventListener('click', (event) => {
            if (!event.target.matches('.drop-button')) {
                if(dropDownContent.classList.contains('mobile-menu')){
                    dropDownContent.classList.remove('mobile-menu');
                }
            }
        });
    });

    document.getElementById('logo').addEventListener('click', () => {
        clearPage();
        createHomePage();
    })

    document.getElementById('concerts') .addEventListener('click', () => {
        clearPage();
        whatsOn();
    });

    

    const clearPage = () => {
        const mainContent = document.getElementById('content')
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            mainContent.removeChild(pageContent)
        };
    }

}

export default createNav;

