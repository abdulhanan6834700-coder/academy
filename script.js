/* =====================================================
   AL NOOR QURAN ACADEMY
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        if (navMenu) {

            navMenu.classList.remove("open");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


/* ================= COUNTER ANIMATION ================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (!entry.isIntersecting) {

                    return;

                }


                const counter =
                    entry.target;


                const target =
                    parseInt(
                        counter.getAttribute(
                            "data-target"
                        )
                    );


                let current = 0;


                const duration = 1800;

                const increment =
                    target /
                    (duration / 20);


                const timer =
                    setInterval(function() {

                        current += increment;


                        if (current >= target) {

                            counter.textContent =
                                target + "+";

                            clearInterval(timer);

                        } else {

                            counter.textContent =
                                Math.floor(current);

                        }

                    }, 20);


                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach(function(counter) {

    counterObserver.observe(counter);

});


/* ================= ADMISSION FORM ================= */

const admissionForm =
    document.getElementById(
        "admissionForm"
    );


if (admissionForm) {

    admissionForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const firstName =
                document.getElementById(
                    "firstName"
                ).value;


            const lastName =
                document.getElementById(
                    "lastName"
                ).value;


            const email =
                document.getElementById(
                    "email"
                ).value;


            const phone =
                document.getElementById(
                    "phone"
                ).value;


            const country =
                document.getElementById(
                    "country"
                ).value;


            const course =
                document.getElementById(
                    "course"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value;


            const whatsappNumber =
                "923359195417";


            const whatsappMessage =

                "Assalam-o-Alaikum Al Noor Quran Academy%0A%0A" +

                "New Free Trial / Admission Request%0A%0A" +

                "Name: " +
                firstName +
                " " +
                lastName +
                "%0A" +

                "Email: " +
                email +
                "%0A" +

                "Phone: " +
                phone +
                "%0A" +

                "Country: " +
                country +
                "%0A" +

                "Course: " +
                course +
                "%0A" +

                "Message: " +
                message;


            const whatsappURL =

                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
