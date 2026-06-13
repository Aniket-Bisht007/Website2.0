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

    if(
        navLinks.classList.contains(
        "active"
        )
    ){

        menuToggle.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }else{

        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});

/* ==================================
   NAVBAR SCROLL EFFECT
=================================== */

window.addEventListener(
"scroll",
()=>{

    const header =
    document.querySelector(
    ".header"
    );

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});




/* ==================================
   OVERVIEW ANIMATION
=================================== */

const overviewCard =
document.querySelector(
".overview-card"
);

const overviewObserver =
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
    threshold:0.3
});

overviewObserver.observe(
overviewCard
);



/* ==================================
   FACULTY ANIMATION
=================================== */

const facultyCards =
document.querySelectorAll(
".faculty-card"
);

const facultyObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const cards =
            document.querySelectorAll(
            ".faculty-card"
            );

            cards.forEach(
            (card,index)=>{

                setTimeout(()=>{

                    card.classList.add(
                    "show"
                    );

                },index*200);

            });

        }

    });

},{
    threshold:0.2
});

facultyObserver.observe(
document.querySelector(
".faculty-grid"
));







/* ==================================
   SUCCESS STORIES REVEAL
=================================== */

const successCards =
document.querySelectorAll(
".video-card"
);

const successObserver =
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
    threshold:.2
});

successCards.forEach(card=>{

    successObserver.observe(card);

});

/* ==================================
   VIDEO CONTROLS
=================================== */

document
.querySelectorAll(".video-card")
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
   ENROLLMENT ANIMATION
=================================== */

const steps =
document.querySelectorAll(
".step-card"
);

const stepObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            steps.forEach(
            (card,index)=>{

                setTimeout(()=>{

                    card.classList.add(
                    "show"
                    );

                },index*200);

            });

        }

    });

},{
    threshold:0.2
});

stepObserver.observe(
document.querySelector(
".timeline-wrapper"
));