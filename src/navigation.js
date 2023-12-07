import about from "./about";
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

    document.getElementById('concerts').addEventListener('click', () => {
        clearPage();
        whatsOn();
    });

    document.getElementById('aboutUs').addEventListener('click', () => {
        clearPage();
        about();
    })

    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById('back-to-top');
    
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };
    
        button.onclick = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    });
    

    const clearPage = () => {
        const mainContent = document.getElementById('content')
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            mainContent.removeChild(pageContent)
        };
    };

    const buttons = document.querySelectorAll('.tab');
    function nameAlert(e) {
        if (e.target === 'click' || e.key === '' || e.key === 'Enter') {
            alert(e.target.textContent)
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', nameAlert)
        button.addEventListener('keydown', nameAlert)
    })

}

export default createNav;

