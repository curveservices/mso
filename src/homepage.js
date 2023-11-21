const createHomePage = () => {
    const content = document.getElementById('content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.innerHTML = `
    <div class="top-container">
        <img class="home-image" src="../dist/assets/orchestra.png">
        <div class="welcome-container">
            <h2>Welcome to the Maidstone Symphony Orchestra</h2>
            <br>
            <h4>Captivating audiences through exceptional music creation.</h4>
            <h4>Find us at home in Kent at Mote Hall, Maidstone, ME15 7RN</h4>
            <button class="browser-btn"><a href="https://www.mso.org.uk/MSO%202023-24%20brochure.pdf">Browse 2023/24</a></button>
        </div> 
    </div>
    `;

    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    aboutUs.setAttribute('id', 'about-us');
    aboutUs.innerHTML = `
    <h1 class="aboutUs-title">About Us</h1>
    <p class="first">
    Under the direction of its acclaimed and popular conductor, Brian Wright, Maidstone Symphony Orchestra is regarded as one of the UK's finest "community" orchestras. It was formed in 1910 as Maidstone Orchestral Society, still the title of the concert promoting organisation.
    Today MSO is a superbly well-balanced mix of local professionals and ex-professionals, music teachers and excellent amateur players who come together regularly on a voluntary basis to produce concerts of a professional standard. This entails great commitment by the players, many of whom travel from all over Kent, and beyond, to attend MSO's weekly Thursday evening rehearsals.
    The MOS is a registered charity number 1163384.
    </p>`;

    const peopleContainer = document.createElement('div');
    peopleContainer.classList.add('events');
    aboutUs.appendChild(peopleContainer);

    const card1 = createPeopleCard(
        '../dist/assets/cconductor.png',
        'Conductor',
        'Brian Wright',
        `
        Brian Wright has been Music Director and Conductor of Maidstone Symphony Orchestra since 1990. Brian studied as a Gulbenkian scholar in London and Munich. He won major prizes in conducting competitions at La Scala, Milan and with the London Symphony Orchestra. He was Assistant Conductor to the LSO and then Associate Conductor to the BBC, winning acclaim for performances at the Proms. Brian has conducted all the UK orchestras, toured in Europe with the BBC Symphony Orchestra, and in Europe and China with the Royal Philharmonic Orchestra. He has been a guest conductor in almost 20 countries.
        `,
        []
    );

    const card2 = createPeopleCard(
        '../dist/assets/placeholder.png',
        'Leader',
        'Andrew Laing',
        `
        Andrew (Andy) Laing started learning the violin when he was 5, and by the age of 16 was appointed leader of the National String Orchestra of Scotland. He gained a place at the Royal Academy of Music, winning numerous prizes and scholarships. Andy was appointed sub-leader of the BBC Radio Orchestra, then Leader of the London City Ballet Orchestra. In the '90s, he spent much time on stage at the Royal Shakespeare Company, where he met his wife, Rachel, also a professional violinist. Andy is a keen amateur astronomer, and if music had not been his first love, it is entirely possible that a career involving the stars may have followed!
        `,
        []
    );

    const card3 = createPeopleCard(
        '../dist/assets/placeholder.png',
        'Committee',
        '',
        ``,
        ['Chairman - Peter Colman', 'General Secretary - Lyn Parker','Treasurer - Harriet Finch', 'Ticketing - Nicci Whittaker', 'PLAYER REPRESENTATIVES - David Montague and Angela Migden',
        'SUBSCRIBER REPRESENTATIVES -Peter Hart, Richard Ashby', 'CO-OPTED MEMBERS - John Lill CBE (President) Janet Ash (Vice-President) David King (Vice-President) Steve Migden (Vice-President) Brian Wright (Conductor & Music Director)']
    );


    peopleContainer.appendChild(card1);
    peopleContainer.appendChild(card2);
    peopleContainer.appendChild(card3)

    const seasonContainer = document.createElement('div');
    seasonContainer.classList.add('season-container')
    seasonContainer.innerHTML = 
    `
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
    <button id="back-to-top">Back to Top</button>
    `;

    content.appendChild(pageContent)
    pageContent.appendChild(aboutUs);
    pageContent.appendChild(seasonContainer)   

    document.querySelector(".events").addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("read-more-btn")) {
            toggleReadMore(target.previousElementSibling);
        }
    });

    function toggleReadMore(content) {
        const btn = content.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            btn.textContent = "Read More";
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`;
            btn.textContent = "Read Less";
        }
    }
}

function createPeopleCard(imageSrc, title, name, description, details) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('player-image');
    image.src = imageSrc;
    card.appendChild(image);

    const peopleDetails = document.createElement('div');
    peopleDetails.classList.add('people-details');
    peopleDetails.innerHTML = `
        <h2 class="event-title">${title}</h2>
        <h3 class="event-title">${name}</h3>
        <br>
        <section>
            <p class="first">
            ${description}
            </p>
            <ul>
            ${details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <p class="read-more-btn">Read More</p>
        </section>
        `;
    card.appendChild(peopleDetails);

    return card;
}

export default createHomePage;