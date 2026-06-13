                                    //  Home page JS

// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';
    }
    else{
        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
    }

});

// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});


/* ==================================
   HERO CAROUSEL
=================================== */

const slides =
document.querySelectorAll(".slide");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextBtn.addEventListener(
    "click",
    nextSlide
);

prevBtn.addEventListener(
    "click",
    prevSlide
);

/* Auto Play */

setInterval(() => {

    nextSlide();

}, 2000);





/* ==================================
   OVERVIEW FADE ANIMATION
=================================== */

const overviewSection =
document.querySelector(".overview-content");

const overviewObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";
        }

    });

},{threshold:0.2});

overviewSection.style.opacity = "0";
overviewSection.style.transform =
"translateY(60px)";
overviewSection.style.transition =
"all 1.2s ease";

overviewObserver.observe(
overviewSection
);



/* ==================================
   IMPACT COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let current = 0;

        const increment =
        Math.ceil(target / 100);

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.innerText =
                current.toLocaleString();

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText =
                target.toLocaleString();
            }
        };

        updateCounter();
    });
}

const impactSection =
document.querySelector(".impact-section");

const impactObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounters();
        }
    });

},{threshold:0.4});

impactObserver.observe(
impactSection
);


/* ==================================
   FOUNDER SECTION ANIMATION
=================================== */

const founderImage =
document.querySelector(".founder-image");

const founderContent =
document.querySelector(".founder-content");

const founderObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            founderImage.classList.add("show");

            setTimeout(()=>{

                founderContent.classList.add("show");

            },300);

        }

    });

},{
    threshold:0.3
});

founderObserver.observe(
document.querySelector(".founder-section")
);


/* ==================================
   PROGRAM CARDS ANIMATION
=================================== */

const programCards =
document.querySelectorAll(".program-card");

const programObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},{
    threshold:0.2
});

programCards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(70px)";

    card.style.transition =
    `all 1s ease ${index * 0.3}s`;

    programObserver.observe(card);

});



/* ==================================
   TESTIMONIAL ANIMATION
=================================== */

const testimonialCards =
document.querySelectorAll(
".testimonial-card"
);

const testimonialObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},{
    threshold:0.2
});

testimonialCards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(80px)";

    card.style.transition =
    `all 1s ease ${index * 0.25}s`;

    testimonialObserver.observe(card);

});



/* ==================================
   CONNECT SECTION REVEAL
=================================== */

const connectItems =
document.querySelectorAll(
".connect-content, .contact-form-card"
);

const connectObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";
        }

    });

},{
    threshold:0.2
});

connectItems.forEach((item,index)=>{

    item.style.opacity="0";

    item.style.transform=
    "translateY(70px)";

    item.style.transition=
    `all 1s ease ${index * 0.2}s`;

    connectObserver.observe(item);

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
   FOOTER REVEAL ANIMATION
=================================== */

const footer =
document.querySelector(
".footer"
);

const footerObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            footer.style.opacity="1";

            footer.style.transform=
            "translateY(0)";
        }

    });

},{
    threshold:0.1
});

footer.style.opacity="0";

footer.style.transform=
"translateY(60px)";

footer.style.transition=
"all 1.2s ease";

footerObserver.observe(
footer
);


