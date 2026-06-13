/* ==================================
   NAVBAR SCROLL EFFECT
=================================== */

const header =
document.querySelector(".header");

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }

});

/* ==================================
   MOBILE MENU TOGGLE
=================================== */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener(
"click",
()=>{

    navLinks.classList.toggle("active");

});

/* ==================================
   CLOSE MENU ON LINK CLICK
=================================== */

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener(
    "click",
    ()=>{

        navLinks.classList.remove("active");

    });

});

/* ==================================
   CLOSE MENU ON OUTSIDE CLICK
=================================== */

document.addEventListener(
"click",
(event)=>{

    if(
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ){

        navLinks.classList.remove("active");
    }

});




/* ==================================
   SMOOTH SCROLL BUTTONS
=================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});






/* ==================================
   CAREER CARD REVEAL
=================================== */

const careerCards =
document.querySelectorAll(
".career-card"
);

const careerObserver =
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
    threshold:.2
});

careerCards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform=
    "translateY(50px)";

    card.style.transition=
    "1s ease";

    careerObserver.observe(card);

});


/* ==================================
   VOLUNTEER SECTION REVEAL
=================================== */

const volunteerImage =
document.querySelector(
".volunteer-image"
);

const volunteerContent =
document.querySelector(
".volunteer-content"
);

const volunteerObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            volunteerImage.classList.add(
            "show"
            );

            volunteerContent.classList.add(
            "show"
            );

        }

    });

},{
    threshold:0.25
});

if(volunteerImage){

    volunteerObserver.observe(
    volunteerImage
    );
}




/* ==================================
   FAQ ACCORDION
=================================== */

const faqItems =
document.querySelectorAll(
".faq-item"
);

faqItems.forEach(item=>{

    const question =
    item.querySelector(
    ".faq-question"
    );

    question.addEventListener(
    "click",
    ()=>{

        faqItems.forEach(faq=>{

            if(faq !== item){

                faq.classList.remove(
                "active"
                );

            }

        });

        item.classList.toggle(
        "active"
        );

    });

});






/* ==================================
   CONTACT FORM REVEAL
=================================== */

const contactObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

document
.querySelector(".contact-info")
.classList.add("show");

document
.querySelector(".contact-form-card")
.classList.add("show");

}

});

},{
threshold:.25
});

contactObserver.observe(
document.querySelector(
".contact-form-section"
)
);

































































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


