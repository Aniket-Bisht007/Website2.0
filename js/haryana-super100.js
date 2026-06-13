/* ==================================
   NAVBAR SCROLL EFFECT
=================================== */

const header =
document.querySelector(
".header"
);

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 50){

        header.classList.add(
        "scrolled"
        );

    }else{

        header.classList.remove(
        "scrolled"
        );
    }

});

/* ==================================
   MOBILE MENU
=================================== */

const menuToggle =
document.querySelector(
".menu-toggle"
);

const navLinks =
document.querySelector(
".nav-links"
);

menuToggle.addEventListener(
"click",
()=>{

    navLinks.classList.toggle(
    "active"
    );

});

document
.querySelectorAll(
".nav-links a"
)
.forEach(link=>{

    link.addEventListener(
    "click",
    ()=>{

        navLinks.classList.remove(
        "active"
        );

    });

});

/* ==================================
   SUCCESS STORIES REVEAL
=================================== */

const revealCards =
document.querySelectorAll(
".video-card"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},{
    threshold:0.2
});

revealCards.forEach(card=>{

    revealObserver.observe(
    card
    );

});

/* ==================================
   VIDEO CONTROLS
=================================== */

document
.querySelectorAll(
".video-card"
)
.forEach(card=>{

    const video =
    card.querySelector(
    ".story-video"
    );

    const playBtn =
    card.querySelector(
    ".play-btn"
    );

    const rewindBtn =
    card.querySelector(
    ".rewind-btn"
    );

    const forwardBtn =
    card.querySelector(
    ".forward-btn"
    );

    playBtn.addEventListener(
    "click",
    ()=>{

        if(video.paused){

            video.play();

            playBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

        }else{

            video.pause();

            playBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

        }

    });

    rewindBtn.addEventListener(
    "click",
    ()=>{

        video.currentTime -= 10;

    });

    forwardBtn.addEventListener(
    "click",
    ()=>{

        video.currentTime += 10;

    });

    video.addEventListener(
    "ended",
    ()=>{

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    });

});

/* ==================================
   BACK TO TOP BUTTON
=================================== */

const backToTop =
document.querySelector(
".back-to-top"
);

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 500){

        backToTop.classList.add(
        "show"
        );

    }else{

        backToTop.classList.remove(
        "show"
        );

    }

});

backToTop.addEventListener(
"click",
()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==================================
   SMOOTH SECTION REVEAL
=================================== */

const sections =
document.querySelectorAll(
".program-overview, .faculty-section, .success-stories, .watch-more-section"
);

const sectionObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity =
    "0";

    section.style.transform =
    "translateY(60px)";

    section.style.transition =
    "1s ease";

    sectionObserver.observe(
    section
    );

});

/* ==================================
   PARALLAX BANNER EFFECT
=================================== */

const bannerImage =
document.querySelector(
".banner-image img"
);

window.addEventListener(
"scroll",
()=>{

    const offset =
    window.pageYOffset;

    if(bannerImage){

        bannerImage.style.transform =
        `scale(1.1) translateY(${offset * 0.08}px)`;

    }

});