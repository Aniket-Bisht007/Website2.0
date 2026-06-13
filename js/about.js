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
   TEAM IMAGE ANIMATION
=================================== */

const teamSection =
document.querySelector(
".team-image-wrapper"
);

const teamObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            teamSection.classList.add(
            "show"
            );

        }

    });

},{
    threshold:0.3
});

teamObserver.observe(
teamSection
);



/* ==================================
   VIDEO PLAYER
=================================== */

const video =
document.getElementById(
"storyVideo"
);

const playPauseBtn =
document.getElementById(
"playPause"
);

const muteBtn =
document.getElementById(
"muteBtn"
);

const progressBar =
document.getElementById(
"progressBar"
);

const fullscreenBtn =
document.getElementById(
"fullscreenBtn"
);

const videoContainer =
document.querySelector(
".video-container"
);

/* Scroll Reveal */

const videoObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            videoContainer.classList.add(
            "show"
            );

            video.play();

        }else{

            video.pause();
        }

    });

},{
    threshold:0.6
});

videoObserver.observe(
videoContainer
);

/* Play Pause */

playPauseBtn.addEventListener(
"click",
()=>{

    if(video.paused){

        video.play();

        playPauseBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }else{

        video.pause();

        playPauseBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
    }

});

/* Mute */

muteBtn.addEventListener(
"click",
()=>{

    video.muted =
    !video.muted;

    muteBtn.innerHTML =
    video.muted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
});

/* Progress */

video.addEventListener(
"timeupdate",
()=>{

    progressBar.value =
    (video.currentTime /
    video.duration) * 100;
});

progressBar.addEventListener(
"input",
()=>{

    video.currentTime =
    (progressBar.value / 100)
    * video.duration;
});

/* Fullscreen */

fullscreenBtn.addEventListener(
"click",
()=>{

    if(video.requestFullscreen){

        video.requestFullscreen();
    }

});


/* ==================================
   VALUES CAROUSEL
=================================== */

const valueCards =
document.querySelectorAll(
".value-card"
);

let current = 0;

function rotateValues(){

    valueCards.forEach(card=>{

        card.classList.remove(
            "active-card",
            "left-card",
            "right-card"
        );
    });

    const left =
    (current + 2) % 3;

    const center =
    current;

    const right =
    (current + 1) % 3;

    valueCards[left]
    .classList.add("left-card");

    valueCards[center]
    .classList.add("active-card");

    valueCards[right]
    .classList.add("right-card");

    current =
    (current + 1) % 3;
}

/* Start Rotation */

setInterval(
rotateValues,
2000
);

rotateValues();



/* ==================================
   THOUGHTS REVEAL
=================================== */

const thoughtCards =
document.querySelectorAll(
".thought-card"
);

const thoughtObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "reveal-active"
            );

        }

    });

},{
    threshold:0.25
});

thoughtCards.forEach(card=>{

    thoughtObserver.observe(card);

});