/* ==========================================
   AL NOOR QURAN ACADEMY
   Main JavaScript
   ========================================== */


/* ---------- Mobile Navigation ---------- */

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

if (menu && links) {

  menu.onclick = () => {
    links.classList.toggle('open');
  };

}


/* ---------- Scroll Reveal Animation ---------- */

const obs = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('show');

      }

    });

  },

  {
    threshold: 0.12
  }

);


document.querySelectorAll('.reveal').forEach(element => {

  obs.observe(element);

});


/* ---------- Animated Counters ---------- */

const counters =
  document.querySelectorAll('[data-count]');


const co = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return;
      }


      const element = entry.target;

      let number = 0;

      const end =
        Number(element.dataset.count);


      const step =
        Math.max(1, Math.ceil(end / 70));


      const timer = setInterval(() => {

        number += step;


        if (number >= end) {

          number = end;

          clearInterval(timer);

        }


        element.textContent =
          number + '+';

      }, 18);


      co.unobserve(element);

    });

  },

  {
    threshold: 0.4
  }

);


counters.forEach(counter => {

  co.observe(counter);

});


/* ---------- FAQ Accordion ---------- */

document
  .querySelectorAll('.faq-item')
  .forEach(item => {

    const question =
      item.querySelector('.faq-q');


    if (!question) {
      return;
    }


    question.addEventListener('click', () => {

      const isOpen =
        item.classList.contains('open');


      document
        .querySelectorAll('.faq-item.open')
        .forEach(openItem => {

          if (openItem !== item) {

            openItem.classList.remove('open');

          }

        });


      item.classList.toggle(
        'open',
        !isOpen
      );

    });

  });


/* ---------- WhatsApp Number ---------- */

const WHATSAPP_NUMBER =
  "923359195417";


/* ---------- Contact Form ---------- */

const leadForm =
  document.getElementById('leadForm');


if (leadForm) {

  leadForm.addEventListener(
    'submit',
    function (event) {

      event.preventDefault();


      const formData =
        new FormData(leadForm);


      const first =
        formData.get('firstName') || '';


      const last =
        formData.get('lastName') || '';


      const phone =
        formData.get('phone') || '';


      const email =
        formData.get('email') || '';


      const country =
        formData.get('country') || '';


      const course =
        formData.get('course') || '';


      const message =
        formData.get('message') || '';


      const noteElement =
        document.getElementById('formNote');


      /* ---------- Validation ---------- */

      if (!first || !last || !phone) {

        if (noteElement) {

          noteElement.textContent =
            "Please fill your name and WhatsApp number.";

        }

        return;

      }


      /* ---------- WhatsApp Message ---------- */

      const text =

        "New Free Trial Request - Al Noor Quran Academy\n" +

        "Name: " +
        first +
        " " +
        last +
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


      const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(text);


      window.open(
        url,
        "_blank"
      );


      if (noteElement) {

        noteElement.textContent =
          "Opening WhatsApp to send your request — please tap Send there to confirm.";

      }


      leadForm.reset();

    }

  );

}
