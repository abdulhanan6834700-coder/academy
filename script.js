
/* MOBILE NAVIGATION */

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

if (menu && links) {
  menu.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}

/* SCROLL REVEAL */

const obs = 'IntersectionObserver' in window
  ? new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.12 }
    )
  : null;

document.querySelectorAll('.reveal').forEach(element => {
  if (obs) {
    obs.observe(element);
  } else {
    element.classList.add('show');
  }
});

/* ANIMATED COUNTERS */

const counters = document.querySelectorAll('[data-count]');

const co = 'IntersectionObserver' in window
  ? new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;
          let number = 0;
          const end = Number(element.dataset.count) || 0;
          const step = Math.max(1, Math.ceil(end / 70));

          const timer = setInterval(() => {
            number += step;

            if (number >= end) {
              number = end;
              clearInterval(timer);
            }

            element.textContent = number + '+';
          }, 18);

          co.unobserve(element);
        });
      },
      { threshold: 0.4 }
    )
  : null;

counters.forEach(element => {
  if (co) {
    co.observe(element);
  } else {
    element.textContent = (element.dataset.count || '0') + '+';
  }
});

/* FAQ ACCORDION */

document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-q');

  if (!question) {
    return;
  }

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

/* WHATSAPP ADMISSION FORM */

const WHATSAPP_NUMBER = '923359195417';
const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(leadForm);

    const first = formData.get('firstName') || '';
    const last = formData.get('lastName') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const country = formData.get('country') || '';
    const course = formData.get('course') || '';
    const message = formData.get('message') || '';
    const note = document.getElementById('formNote');

    if (!first || !last || !phone) {
      if (note) {
        note.textContent =
          'Please fill your name and WhatsApp number.';
      }
      return;
    }

    const text =
      'New Free Trial Request - Al Noor Quran Academy\n' +
      'Name: ' + first + ' ' + last + '\n' +
      'WhatsApp: ' + phone + '\n' +
      (email ? 'Email: ' + email + '\n' : '') +
      (country ? 'Country: ' + country + '\n' : '') +
      (course ? 'Course: ' + course + '\n' : '') +
      (message ? 'Message: ' + message : '');

    const whatsappURL =
      'https://wa.me/' +
      WHATSAPP_NUMBER +
      '?text=' +
      encodeURIComponent(text);

    window.open(whatsappURL, '_blank', 'noopener');

    if (note) {
      note.textContent =
        'Opening WhatsApp — please tap Send there to confirm.';
    }

    leadForm.reset();
  });
}
