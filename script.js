/* =====================================================
   AL NOOR QURAN ACADEMY
   PREMIUM JAVASCRIPT
===================================================== */


/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {

    menu.addEventListener("click", () => {

        links.classList.toggle("open");

    });


    document.querySelectorAll(".links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                links.classList.remove("open");

            });

        });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   NUMBER COUNTER
========================= */

const counters =
    document.querySelectorAll("[data-count]");


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;

                const target =
                    Number(counter.dataset.count);

                let current = 0;

                const duration = 1500;

                const start =
                    performance.now();


                function update(time) {

                    const progress =
                        Math.min(
                            (time - start) /
                            duration,
                            1
                        );


                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    current =
                        Math.floor(
                            eased * target
                        );


                    counter.textContent =
                        current + "+";


                    if (progress < 1) {

                        requestAnimationFrame(
                            update
                        );

                    } else {

                        counter.textContent =
                            target + "+";

                    }

                }


                requestAnimationFrame(
                    update
                );


                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.7
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================
   ADMISSION FORM
========================= */

const form =
    document.getElementById(
        "admissionForm"
    );


if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const firstName =
                document.getElementById(
                    "firstName"
                ).value.trim();


            const lastName =
                document.getElementById(
                    "lastName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "phone"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


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
                ).value.trim();


            const text =
`Assalam-o-Alaikum Al Noor Quran Academy,

I would like to book a Free Trial Quran Class.

Name: ${firstName} ${lastName}
WhatsApp: ${phone}
Email: ${email}
Country: ${country}
Course: ${course}
Message: ${message}`;


            const whatsappURL =
                "https://wa.me/923359195417?text="
                +
                encodeURIComponent(text);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
