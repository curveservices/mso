const about = () => {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    aboutUs.setAttribute('id', 'about-us');
    aboutUs.innerHTML = `
    <h1 class="aboutUs-text">About Us</h1>
    <p class="about-first aboutUs-text">
    Under the direction of its acclaimed and popular conductor, Brian Wright, Maidstone Symphony Orchestra is regarded as one of the UK's finest "community" orchestras.
    It was formed in 1910 as Maidstone Orchestral Society, still the title of the concert promoting organisation.</p>
    <br>
    <p>Today MSO is a superbly well-balanced mix of local professionals and ex-professionals, music teachers and excellent amateur players who come together regularly on a voluntary basis to produce concerts of a professional standard. This entails great commitment by the players, many of whom travel from all over Kent, and beyond, to attend MSO's weekly Thursday evening rehearsals.
    The MOS is a registered charity number 1163384.
    </p>`;

    const events = document.createElement('div');
    events.classList.add('events');

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

    content.appendChild(pageContent)
    pageContent.appendChild(aboutUs);
    aboutUs.appendChild(events)

    events.appendChild(card1);
    events.appendChild(card2);
    events.appendChild(card3)

    events.addEventListener("click", function (event) {
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
    };
    
    function createPeopleCard(imageSrc, title, name, description, details) {
        const card = document.createElement('article');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('player-image');
        image.src = imageSrc;
        image.setAttribute('alt', `${name}`)
        card.appendChild(image);

        const eventDetails = document.createElement('div');
        eventDetails.classList.add('event-details');
        eventDetails.innerHTML =  `
            <h2 class="event-title">${title}</h2>
            <h3 class="event-title">${name}</h3>
            <ul>
                ${details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <br>
            <p class="first">${description}</p>
            <p class="read-more-btn">Read More</p>
            `;

        card.appendChild(eventDetails);

        return card;
    }
}

export default about