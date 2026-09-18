/* =========================================================
   AL NOOR QURAN ACADEMY JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {

  menu.addEventListener("click", () => {

    links.classList.toggle("open");

  });


  links.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      links.classList.remove("open");

    });

  });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

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


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach(element => {

    element.classList.add("show");

  });

}


/* =========================================================
   ANIMATED COUNTERS
   ========================================================= */

const counters =
  document.querySelectorAll("[data-count]");


if (counters.length) {

  const counterObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          const element =
            entry.target;


          const target =
            Number(
              element.dataset.count
            );


          let current = 0;


          const duration = 1200;

          const start =
            performance.now();


          function updateCounter(now) {

            const progress =
              Math.min(
                (now - start) / duration,
                1
              );


            current =
              Math.floor(
                progress * target
              );


            element.textContent =
              current + "+";


            if (progress < 1) {

              requestAnimationFrame(
                updateCounter
              );

            } else {

              element.textContent =
                target + "+";

            }

          }


          requestAnimationFrame(
            updateCounter
          );


          counterObserver.unobserve(
            element
          );

        });

      },
      {
        threshold: 0.4
      }
    );


  counters.forEach(counter => {

    counterObserver.observe(counter);

  });

}


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-q");


  if (!question) {
    return;
  }


  question.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("open");


    faqItems.forEach(other => {

      if (other !== item) {

        other.classList.remove("open");

      }

    });


    item.classList.toggle(
      "open",
      !isOpen
    );

  });

});


/* =========================================================
   WHATSAPP CONTACT FORM
   ========================================================= */

const WHATSAPP_NUMBER =
  "923359195417";


const leadForm =
  document.getElementById("leadForm");


if (leadForm) {

  leadForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const formData =
        new FormData(leadForm);


      const firstName =
        formData.get("firstName") || "";


      const lastName =
        formData.get("lastName") || "";


      const phone =
        formData.get("phone") || "";


      const email =
        formData.get("email") || "";


      const country =
        formData.get("country") || "";


      const course =
        formData.get("course") || "";


      const message =
        formData.get("message") || "";


      const note =
        document.getElementById(
          "formNote"
        );


      if (
        !firstName ||
        !lastName ||
        !phone
      ) {

        if (note) {

          note.textContent =
            "Please enter your name and WhatsApp number.";

        }

        return;

      }


      const whatsappMessage =

        "New Free Trial Request - Al Noor Quran Academy\n\n" +

        "Name: " +
        firstName +
        " " +
        lastName +
        "\n" +

        "WhatsApp: " +
        phone +
        "\n" +

        (
          email
            ? "Email: " + email + "\n"
            : ""
        ) +

        (
          country
            ? "Country: " + country + "\n"
            : ""
        ) +

        (
          course
            ? "Course: " + course + "\n"
            : ""
        ) +

        (
          message
            ? "Message: " + message
            : ""
        );


      const whatsappURL =

        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(
          whatsappMessage
        );


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );


      if (note) {

        note.textContent =
          "WhatsApp opened. Please press Send to submit your request.";

      }


      leadForm.reset();

    }
  );

}
