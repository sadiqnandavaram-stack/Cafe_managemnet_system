
/* =========================================
   THE BROWN CUP - JAVASCRIPT
========================================= */


/* ================= SUBSCRIBE FORM ================= */

const subscribeForm =
    document.getElementById("subscribeForm");

const emailInput =
    document.getElementById("emailInput");

const subscribeMessage =
    document.getElementById("subscribeMessage");


if (subscribeForm) {

    subscribeForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                emailInput.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                subscribeMessage.textContent =
                    "Please enter your email address.";

                subscribeMessage.style.color =
                    "#ff6b6b";

                return;
            }


            if (!emailPattern.test(email)) {

                subscribeMessage.textContent =
                    "Please enter a valid email address.";

                subscribeMessage.style.color =
                    "#ff6b6b";

                return;
            }


            subscribeMessage.textContent =
                "Thank you for subscribing! ☕";

            subscribeMessage.style.color =
                "#E1B168";


            emailInput.value = "";


            setTimeout(function () {

                subscribeMessage.textContent = "";

            }, 4000);

        }
    );

}


/* ================= NAVIGATION ================= */

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

        }
    );

});


/* ================= HERO BUTTONS ================= */

const orderButton =
    document.getElementById("boom");

const menuButton =
    document.getElementById("boom2");


if (orderButton) {

    orderButton.addEventListener(
        "click",
        function () {

            const reservation =
                document.getElementById("reservation");


            reservation.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            const gallery =
                document.getElementById("gallery");


            gallery.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* ================= ABOUT BUTTON ================= */

const aboutButton =
    document.querySelector(".sec");


if (aboutButton) {

    aboutButton.addEventListener(
        "click",
        function () {

            const about =
                document.getElementById("about");


            about.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* ================= RESERVATION BUTTONS ================= */

const bookTable =
    document.getElementById("bookTable");

const getInTouch =
    document.getElementById("getInTouch");


if (bookTable) {

    bookTable.addEventListener(
        "click",
        function () {

            alert(
                "Thank you! Table booking will be available soon. ☕"
            );

        }
    );

}


if (getInTouch) {

    getInTouch.addEventListener(
        "click",
        function () {

            const contact =
                document.getElementById("contact");


            contact.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* ================= SCROLL REVEAL ================= */

const animatedElements =
    document.querySelectorAll(
        ".hi, .gallery-section, .reserved-main, .footer-details, .footer-bottom"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    element.classList.add(
        "scroll-hidden"
    );

    observer.observe(element);

});


/* ================= NAVBAR SHADOW ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.15)";

        }

        else {

            navbar.style.boxShadow =
                "none";

        }

    }
);


/* ================= FOOTER LOGO ================= */

const footerLogo =
    document.querySelector(".img-foot a");


if (footerLogo) {

    footerLogo.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}
