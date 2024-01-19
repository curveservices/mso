const whatsOn = () => {

    const content = document.getElementById('content');
    
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event-container');

    const comingUp = document.createElement('div');
    comingUp.classList.add('text-container');
    comingUp.innerHTML = `
    <h1 class="main-title">Coming Up</h1>
    <p class="first">Our 2024/25 season concerts will announced shortly.
    If you drop us an email to secretary@mso.org.uk we will keep you in touch with all our news.</p>
    `;
    const events = document.createElement('div');
    events.classList.add("events", "event-image");

    const card1 = createEventCard(
        '../dist/assets/benjaminbaker.png',
        'Benjamin Baker',
        '2nd December 2023',
        ['Holst - The Perfect Fool', 'Coleridge-Taylor - Violin Concerto', 'Vaughan Williams - The Lark Ascending', 'Elgar - Falstaff'],
        `
        A splendid concert of English music! One of our favourite violinists, New Zealander Benjamin Baker, on his fifth visit to MSO, plays both Samuel Coleridge-Taylor’s passionately late-romantic Violin Concerto and Vaughan Williams’ much-loved The Lark Ascending. To start we’ve a delightful suite of ballet music from Gustav Holst’s opera The Perfect Fool. And to finish there’s Elgar’s superbly crafted “symphonic portrait” of Shakespeare’s Falstaff. Elgar said he particularly enjoyed writing it, calling Falstaff “one of my best works”.
        `
    );

    const card2 = createEventCard(
        '../dist/assets/mathilde.png',
        'Mathilde Milwidsky',
        '3rd February 2024',
        ['Wagner - Overture, Die Meistersinger', 'Sibelius - Violin Concerto', 'Rimsky-Korsakov - Scheherazade'],
        `
        Late-romanticism leaps to the fore in this highly entertaining concert. Wagner’s magnificent Overture from his opera Die Meistersinger paves the way for Sibelius’ powerful Violin Concerto. There’s an instant return for the young British violinist Mathilde Milwidsky, who made such a tremendous impression at her MSO debut in 2022. Rimsky-Korsakov’s Scheherazade is rightly popular. Gloriously orchestrated, Rimsky paints a series of wonderfully vivid musical pictures based on the famous collection of tales from the “thousand and one” Arabian Nights.
        `
    );

    const card3 = createEventCard(
        '../dist/assets/iyad.png',
        'Iyad Sughayer',
        '23 March 2024',
        ['Mendelssohn - Overture, The Fair Melusine', 'Beethoven - Piano Concerto No.3', 'Schubert - Symphony No.9 “Great”'],
        `
        This concert brings us musical classicism at the cusp of the Romantic Era. Our soloist is the multi-prizewinning Jordanian-Palestinian pianist Iyad Sughayer playing the emotionally diverse passions of Beethoven’s 3rd Piano Concerto. Mendelssohn’s neglected but nevertheless delightful Overture, The Fair Melusine sets the scene. Schubert’s much-loved “Great C major” Symphony then crowns it. Sadly, it had to wait ten years after his early death before its premiere, conducted by Mendelssohn.
        `
    );

    const card4 = createEventCard(
        '../dist/assets/jonathan.png',
        '18 May 2024',
        'Jonathan Leibovitz',
        ['Philip Le Bas - Yuki-Onna', 'Mozart - Clarinet Concerto', 'Debussy - Clarinet Rhapsody No.1', 'Bartok - Concerto for Orchestra'],
        `
        We end our season with Bartok’s Concerto for Orchestra. Written in 1943 to show off the brilliance of the Boston Symphony Orchestra, it was an instant success and has retained its popularity ever since. Our soloist in both Mozart’s evergreen Clarinet Concerto and Debussy’s 1st Clarinet Rhapsody is the award-winning Israeli clarinettist Jonathan Leibovitz. To begin, we’ve a fine home-grown contemporary piece, Yuki-Onna, based on Japanese folklore, written by our much-admired principal bassoonist, Philip Le Bas.
        `
    );

    const card5 = createEventCard(
        '../dist/assets/steve.png',
        'Pre-concert talks',
        'from 18:40 - 19:10',
        [],
        `
        Steve Migden presents fress pre-concert talks before each concert from 6:40 - 7:10pm.  Steve has been a professional musician and educator since arriving from the USA in 1995 to study horn at the Royal Academy of Music. He presents iinformative informal & 'fun' talks throughout Kent. He has served MSO as Principal Horn, MSO Chairman, and currently as an MOS Vice Presiident
        `
    );

    const card6 = createEventCard(
        '../dist/assets/venue.png',
        'Venue',
        '',
        [],
        `
        All our concerts are held in Mote Hall Mote Leisure Centre, Maidstone, ME15 7RN.  Wheelchairs can be accommodated in certain areas of the hall. A number of reserved car parking spaces are available for visitors with disabilities. The bar is open before and after the concerts, and during the interval. Interval drinks may be pre-ordered Refreshments are available in the bar foyer
        Please note that Maidstone Leisure Centre (Mote Hall) have installed a vehicle number plate recognition system in the car park. However, we have arranged for the system to be TURNED OFF AT 5.30pm prior to each of our concerts. Therefore, please ignore all signage and park as normal, without registering your vehicle’s number plate.
        `
    );

    content.appendChild(pageContent);
    pageContent.appendChild(eventContainer);
    eventContainer.appendChild(comingUp)
    eventContainer.appendChild(events)
    events.appendChild(card1)
    events.appendChild(card2)
    events.appendChild(card3)
    events.appendChild(card4)
    events.appendChild(card5)
    events.appendChild(card6)

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
    };

    function createEventCard(imageSrc, title, date, details, description) {
        const card = document.createElement('article');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('player-image');
        image.src = imageSrc;
        image.setAttribute('alt', `${title}`, 'srcset')
        card.appendChild(image);

        const eventDetails = document.createElement('div');
        eventDetails.classList.add('event-details');
        eventDetails.innerHTML = `
            <h2 class="event-title">${title}</h2>
            <p class="date">${date}</p>
            <br>
            <ul>
                ${details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <br>
                <p class="first">
                    ${description}
                </p>
                <p class="read-more-btn">Read More</p>
                `;
        card.appendChild(eventDetails);

        return card;
    };
}

export default whatsOn;