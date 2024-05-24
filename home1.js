window.addEventListener('scroll',
    revealSections);


function
    revealSections() {

    var
        sections = document.querySelectorAll('.section');


    sections.forEach(function (section) {

        var
            sectionTop = section.getBoundingClientRect().top;

        var
            windowHeight = window.innerHeight;


        if (sectionTop <
            windowHeight -
            100) {

            section.classList.add('reveal');

        }

    });

}


let
    slideIndex = 0;

let
    slides;


function
    showSlides() {

    slides =
        document.getElementsByClassName("mySlides");

    for (let i = 0; i <slides.length;i++) {
        slides[i].style.display =
            "none";

    }

    slideIndex++;

    if (slideIndex >
        slides.length) {

        slideIndex =
            1;

    }

    slides[slideIndex -
        1].style.display =
        "block";

}


function
    plusSlides(n) {

    slideIndex +=
        n;

    if (slideIndex <
        1) {

        slideIndex =
            slides.length;

    } else
        if (slideIndex >
            slides.length) {

            slideIndex =
                1;

        }

    for (let
        i =
            0; i <
        slides.length;
        i++) {

        slides[i].style.display =
            "none";

    }

    slides[slideIndex -
        1].style.display =
        "block";

}



setInterval(showSlides, 2000);
