// Automatische rendering maken van de portfolio items
const allItems = [
    { src: "./images/calculator.png", text: "Calculator"},
    { src: "./images/custom_countdown.png", text: "Custom Countdown"},
    { src: "./images/infinite-scroll.png", text: "Infinite Scroll"},
    { src: "./images/lightdark1.png", text: "Lightdark"},
    { src: "./images/math_sprint.png", text: "Math Sprint"},
    { src: "./images/musicplayer.png", text: "Musicplayer"},
    { src: "./images/paintclone.png", text: "Paintclone"},
    { src: "./images/picture-picture.png", text: "Picture-in-Picture"},
    { src: "./images/pong.png", text: "Pong"},
    { src: "./images/quote-generator.png", text: "Quote-Generator"},
    { src: "./images/robotfriends.png", text: "Robotfriends"},
    { src: "./images/splash_page.png", text: "Splash Page"},
];

const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;
const itemsPerPage = 6;

function galleryGrid() {
    let scrollPosition = 0;
    scrollPosition = window.scrollY;
    gallery.innerHTML = '';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = allItems.slice(start, end);

    // Als er minder items zijn dan verwacht, vul de grid met lege div's
    const missingItems = itemsPerPage - currentItems.length;

    // Voeg lege div's toe als er minder items zijn dan verwacht
    for (let i = 0; i < missingItems; i++) {
        currentItems.push({ src: "", text: "" });  // Voeg een "leeg" item toe zonder afbeelding en tekst
    }

    // Maak de grid-items dynamisch
    currentItems.forEach(item => {
        const div = document.createElement("div");

        // Voeg de 'gallery-item' class toe als er een afbeelding is
        if (item.src) {
            div.classList.add('view', 'overlay', 'hm-black-light', 'gallery-item');
            div.innerHTML = `
                <img src="${item.src}" alt="Gallery-Image" class="img-fluid">
                <div class="mask flex-center">
                    <p class="gallery-text">${item.text}</p>
                </div>
            `;
        } else {
            // Voeg de lege div zonder 'gallery-item' class toe als er geen afbeelding is
            div.classList.add('empty-grid');
            div.innerHTML = '';
        }

        gallery.appendChild(div);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= allItems.length;

    // Behoudt de positie na het klikken van terug of verder
setTimeout(() => {
    window.scrollTo(0, scrollPosition);
}, 0);

document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    const text = item.querySelector('.gallery-text');

    img.addEventListener('click', () => {
        galleryImg.src = img.src;  // Zet de juiste afbeelding in de gallery-open
        galleryOpenTekst.innerHTML = `
            <a href="${img.src}" target="_blank" style="color: white; text-decoration:none ;font-weight:bold">${text ? text.innerHTML : ''}</a>
        `;
        
        galleryOpen.classList.add('active');
    });
});
}

galleryGrid();

// Gallery Items maken voor de GRID layout om dit te kunnen openen midden op het scherm
const galleryOpen = document.getElementById('gallery-open');
const galleryImg = document.getElementById('gallery-openImg');
const galleryOpenTekst = document.getElementById('galleryOpenTekst');

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage > 0) {
        currentPage--;
        galleryGrid();
    }
    return false;
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if ((currentPage + 1) * itemsPerPage < allItems.length) {
        currentPage++;
        galleryGrid();
    }
    return false;
});


// Sluiten bij tik buiten de afbeelding
galleryOpen.addEventListener('click', (event) => {
    if (event.target === galleryOpen) {
        galleryOpen.classList.remove('active');
    }
});
// Scrolling modus voor op de pagina bij het klikken van de links
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scrollen naar de desbetreffende sectie
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
