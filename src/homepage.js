const createHomePage = () => {
    const content = document.getElementById('content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.innerHTML = `
    <div class="image-container">
        <img class="home-image" src="../dist/assets/orchestra.png">
        <div class="welcome-container">
            <h2>Welcome to the Maidstone Symphony Orchestra</h2>
            <br>
            <h4>Captivating audiences through exceptional music creation.</h4>
            <h4>Find us at home in Kent at Mote Hall, Maidstone, ME15 7RN</h4>
            <button class="browser-btn"><a href="https://www.mso.org.uk/MSO%202023-24%20brochure.pdf">Browse 2023/24</a></button>
        </div> 
    </div> 
    <div class="season-container">
            <div class="image-title">
                <img class="image-brian" src="../dist/assets/brian.png">
                <section>
                    <h2>Music Director Brian Wright introduces the season:</h2>
                    <br>
                    <p class="first" id="first">
                        We’ve a particularly fine set of concerts for you this season,
                        featuring some of our favourite young international soloists.
                        Cellist Maxim Calver plays Shostakovich’s brilliant 1st Cello
                        Concerto, while master violinist Benjamin Baker, returning
                        for a fifth time to MSO, brings Samuel Coleridge-Taylor’s
                        increasingly popular Violin Concerto along with Vaughan
                        Williams’ iconic The Lark Ascending.
                        
                        Mathilde Milwidsky, who impressed so much last season as a last-minute
                        substitute, returns to play Sibelius’s exciting Violin
                        Concerto. And there are also MSO debuts for acclaimed
                        Jordanian-Palestinian pianist Iyad Sughayer in Beethoven’s
                        mighty 3rd Piano Concerto, and a superb Israeli clarinettist
                        Jonathan Leibovitz in both Mozart and Debussy. 
                        MSO will be kept on their toes with classic symphonies by
                        Brahms and Schubert, the ultimate romanticism of RimskyKorsakov’s Scheherazade, 
                        great English works by Holst and
                        Elgar, and Bartok’s spectacular Concerto for Orchestra. 
                        There are also delightful overtures by Smetana, Wagner and
                        Mendelssohn and, I’m very pleased to say, a contemporary
                        piece composed by our principal bassoonist, Philip Le Bas,
                        his Yuki-Onna (”Snow-Woman” - an orchestral ghost story).
                    </p>
                    <p class="read-more-btn" id="readMoreBtn">Read More</p>
                </section>
            </div> 
        </div>`;

    


    content.appendChild(pageContent)
    
    document.getElementById("readMoreBtn").addEventListener("click", toggleReadMore);

    function toggleReadMore() {
        const content = document.getElementById("first");
        const btn = document.getElementById("readMoreBtn");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            btn.textContent = "Read More";
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`;
            btn.textContent = "Read Less";
        }
    }
    
}

export default createHomePage;